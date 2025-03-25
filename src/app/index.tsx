import { AppStore } from './AppStore';

import { ListLayout } from '@layout/listLayout';
import { EditAreaLayout } from '@layout/editAreaLayout';

import css from './index.module.css';

export const App = () => {
  return (
    <AppStore>
      <section className={css.wrapper}>
        <ListLayout />
        <EditAreaLayout />
      </section>
    </AppStore>
  );
};
