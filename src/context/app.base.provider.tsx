/* eslint-disable react-refresh/only-export-components */
import { FC, PropsWithChildren } from 'react';
import { AppBase } from '../services/app.base';
import { AppBaseContextProvider } from './app.base.context';

export const appBase = new AppBase();

declare global {
  interface Window {
    appBase: AppBase;
  }
}
window.appBase = appBase;

export const AppBaseProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AppBaseContextProvider value={appBase}>{children}</AppBaseContextProvider>;
};
