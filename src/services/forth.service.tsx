import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from './app.base';

interface IForthState {
  inForth: number;
  outForth: number;
}

export class ForthService extends Store<IForthState> {
  constructor(initialState: IForthState, protected app: IAppBase) {
    super(initialState, undefined, 'INIT');
  }

  async init() {
    await delay(1000);
    this.setState({ status: 'READY' });
  }
  
  forthMethod() {
    console.log('forth method');
    this.setState({ inForth: ++this.$state.inForth });
  }

  forthMethodOut(value: number) {
    console.log('forth method out');
    this.setState({ outForth: value });
  }
}
