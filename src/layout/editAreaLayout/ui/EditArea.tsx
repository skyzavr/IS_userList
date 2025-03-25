import { useSelector } from 'react-redux';

import { UserData } from '@widgets/userData';
import { currentUserSelector } from '@widgets/userList/model/selectors';
import { EditPreview } from '@entities/editPreview';
import { createPortal } from 'react-dom';

import css from './css.module.css';

export const EditAreaLayout = () => {
  const { innerWidth } = window;
  const { currentUser } = useSelector(currentUserSelector);

  if (innerWidth >= 840)
    return (
      <section>
        {currentUser.id !== '' ? <UserData /> : <EditPreview />}
      </section>
    );
  if (currentUser.id !== '')
    return createPortal(
      <div className={css.modal}>{<UserData />}</div>,
      document.body
    );
};
