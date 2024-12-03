/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { AppBase } from './app.base';

const appBaseContext = createContext({});
export const AppBaseContextProvider = appBaseContext.Provider;

export const useAppBaseContext = <T extends AppBase = AppBase>() => {
  return useContext(appBaseContext) as T;
};
