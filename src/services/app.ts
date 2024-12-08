import { AppBase, IAppBase } from './app.base';
import { createStoreFactory } from './create.store.factory';
import { ForthService } from './forth.service';
import { NewService } from './new.service';

export interface IApp extends IAppBase {
  forth: ReturnType<typeof createStoreFactory<ForthService>>
  newService: NewService;
}

export class App extends AppBase {
  forth = createStoreFactory(ForthService);
  newService = new NewService(this);

  async init() {
    await this.newService.init();
    await super.init();
  }
}
