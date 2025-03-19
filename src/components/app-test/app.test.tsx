import { useEffect } from "react";
import { NewStore } from "./test";

export const AppTest = () => {


  useEffect(() => {
    const newStore = new NewStore({});

    const listen = async () => {
      // const iterable = newStore.getIterable();
      // const iterator = iterable[Symbol.asyncIterator]();
      // iterator.throw?.(new Error('test throw')).catch(console.log);

      for await (const data of newStore.getIterable()) {
        console.log(data);
        // throw new Error('error');
        break;
      }
    }

    listen().catch((e) => console.log('CATCH', e));

    newStore.method();
  }, []);

  return <div />;
};
