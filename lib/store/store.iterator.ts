import { Store } from './store';

type FullState<T extends Store> = T['state'];
type Result<T extends Store> = { value: FullState<T> };
type Resolver<T extends Store> = (result: Result<T>) => void;

const DONE = Promise.resolve({ done: true } as IteratorReturnResult<undefined>);

export class StoreIterator<T extends Store> {
  private aborted = false;
  private eventQueue: Result<T>[] = [];
  private resolverQueue: Resolver<T>[] = [];
  private onAbort;

  constructor(
    store: T,
    keys: (keyof FullState<T>)[] = [],
    as?: AbortSignal,
    emitStateOnInit = false,
  ) {
    const off = store.subscribe(this.onState.bind(this), keys, as, emitStateOnInit);
    const onAbort = () => {
      this.aborted = true;
      off();
      as?.removeEventListener('abort', onAbort);
      this.resolverQueue.map((rv) => rv({} as Result<T>));
    }
    as?.addEventListener('abort', onAbort);
    this.onAbort = onAbort;
  }


  setResolver (rv: Resolver<T>) {
    this.resolverQueue.push(rv);
  };

  onState (value: FullState<T>) {
    const resolver = this.resolverQueue.shift();

    if (resolver) {
      resolver({ value });
    } else {
      this.eventQueue.push({ value });
    }
  }

  async next() {
    if (this.aborted) {
      return DONE;
    }

    let result = this.eventQueue.shift();
    if (result) {
      return result;
    }

    result = await new Promise(this.setResolver.bind(this));

    if (this.aborted) {
      return DONE;
    }

    return result;
  }

  return() {
    console.log('RETURN');
    this.onAbort();
    return DONE;
  }

  throw(e: unknown) {
    console.log('THROW', e);
    this.onAbort();
    return DONE;
  }
}
