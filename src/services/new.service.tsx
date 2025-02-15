import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from './app.base';

interface INewState {
  data: Record<string, string>;
  count: number;
}

export class NewService extends Store<INewState> {
  constructor(protected app: IAppBase) {
    super({ data: {}, count: 0 });
  }

  async init() {
    this.app.firstService.subscribe(
      (s) => this.getData(s.inFirst),
      ['inFirst'],
    );
    this.subscribe(
      async () => {
        await delay(0);
        this.setState({ count: this.$state.count + 1 });
      },
      ['data'],
    );
    await delay(0);
  }
  
  getData(value: number) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${value}`)
      .then(response => response.json())
      .then((data: Record<string, string>) => this.setState({ data }))
      .catch(console.log);
  }
}
