import { Store } from '@lib/store/store';
import { FirstService } from './first.service';
import { SecondService } from './second.service';
import { ThirdService } from './third.service';

export interface IAppBase {
  firstService: FirstService;
  secondService: SecondService;
  thirdService: ThirdService;
};

export class AppBase extends Store implements IAppBase {
  firstService: FirstService = new FirstService({ inFirst: 0, outFirst: 0, }, this);
  secondService: SecondService = new SecondService({ inSecond: 0, outSecond: 0 }, this);
  thirdService: ThirdService = new ThirdService({ inThird: 0, outThird: 0 }, this);

  constructor() {
    super({}, null, 'INIT');
  }
  
  async init() {
    await this.firstService.init();
    await this.secondService.init();
    await this.thirdService.init();
    this.setState({ status: 'READY' });
  }
}
