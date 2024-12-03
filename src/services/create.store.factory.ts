/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from "@lib/store/store";
import { useEffect, useState } from "react";

const storage = new Map<{ new(...args: any[]): any }, Map<string, any>>();

export const createStoreFactory = <T extends Store>(Class: { new(...args: any[]): T }) => {
  let stores = storage.get(Class);
  if (!stores) {
    stores = new Map<string, T>();
    storage.set(Class, stores);
  }

  const createStore = (key: string, ...params: ConstructorParameters<typeof Class>) => {
    let s  = stores.get(key);
    if (!s) {
      s = new Class(...params);
      stores.set(key, s);
    }
    return s;
  }
  
  const useStore = (key: string, ...params: ConstructorParameters<typeof Class>): T => {
    const [store] = useState(() => createStore(key, ...params));

    useEffect(() => {
      store.init();
      return () => {
        stores.delete(key);
        store.dispose();
      }
    }, [key, store]);

    return store;
  }

  const getStore = (key: string): T => {
    return stores.get(key);
  }

  return { useStore, getStore };
};
