import { AppBase, IAppBase } from './app.base';
import { createStoreFactory } from './create.store.factory';
import { ForthService } from './forth.service';


export interface IApp extends IAppBase {
  forth: ReturnType<typeof createStoreFactory<ForthService>>
};

export class App extends AppBase {
  forth = createStoreFactory(ForthService);
}