import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

type appStoreProps = { children: ReactElement };

export const AppStore = ({ children }: appStoreProps) => (
  <Provider store={store}>{children}</Provider>
);
