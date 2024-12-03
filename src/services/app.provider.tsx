/* eslint-disable react-refresh/only-export-components */
import { FC, PropsWithChildren } from 'react';
import { AppBaseContextProvider, useAppBaseContext } from './app.base.context';
import { App } from './app';

export const app = new App();

export const useAppContext = useAppBaseContext<App>;

declare global {
  interface Window {
    app: App;
  }
}
window.app = app;

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AppBaseContextProvider value={app}>{children}</AppBaseContextProvider>;
};
