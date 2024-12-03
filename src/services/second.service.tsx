import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from './app.base';

interface ISecondState {
  inSecond: number;
  outSecond: number;
}

export class SecondService extends Store<ISecondState> {
  constructor(initialState: ISecondState, protected app: IAppBase) {
    super(initialState, undefined, 'INIT');
  }

  async init() {
    await delay(1000);
    this.setState({ status: 'READY' });
    this.app.firstService.subscribe((state) => {
      this.setState({ outSecond: state.inFirst })
    }, ['inFirst'])
  }
  
  secondMethod() {
    console.log('second method');
    this.setState({ inSecond: ++this.$state.inSecond })
  }
}
