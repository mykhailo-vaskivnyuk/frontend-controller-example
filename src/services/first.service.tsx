import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from './app.base';

interface IFirstState {
  inFirst: number;
  outFirst: number;
}

export class FirstService extends Store<IFirstState> {
  constructor(initialState: IFirstState, protected app: IAppBase) {
    super(initialState, undefined, 'INIT');
  }

  async init() {
    await delay(1000);
    this.setState({ status: 'READY' });
    this.app.secondService.subscribe((state) => {
      this.setState({ outFirst: state.inSecond })
    }, ['inSecond'])
  }
  
  firstMethod() {
    console.log('first method');
    this.setState({ inFirst: ++this.$state.inFirst })
  }
}
