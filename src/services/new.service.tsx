import { Store } from '@lib/store/store';
import { IAppBase } from './app.base';

interface INewState {
  data: unknown;
  count: number;
}

export class NewService extends Store<INewState> {
  constructor(protected app: IAppBase) {
    super({ data: {}, count: 0 }, undefined, 'INIT');
  }

  async init() {
    this.app.firstService.subscribe(
      (s) => this.getData(s.inFirst),
      ['inFirst'],
    );
    this.subscribe(
      () => this.setState({ count: this.$state.count + 1 }),
      ['data'],
    );
  }
  
  getData(value: number) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${value}`)
      .then(response => response.json())
      .then((data) => this.setState({ data }));
  }
}
