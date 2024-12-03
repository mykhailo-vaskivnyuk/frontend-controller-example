import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from './app.base';

interface IThirdState {
  inThird: number;
  outThird: number;
}

export class ThirdService extends Store<IThirdState> {
  constructor(initialState: IThirdState, protected app: IAppBase) {
    super(initialState, undefined, 'INIT');
  }

  async init() {
    await delay(1000);
    this.setState({ status: 'READY' });
    this.subscribe(async (state) => {
      this.setState({ outThird: state.inThird });
    }, ['inThird']);
  }
  
  thirdMethod() {
    console.log('third method');
    this.setState({ inThird: ++this.$state.inThird })
  }
}
