import { useSelector } from 'react-redux';

import { UserList } from '@widgets/userList';
import { usersSelector } from '@widgets/userList/model/selectors';

import css from './css.module.css';

export const ListLayout = () => {
  const { userNumber } = useSelector(usersSelector);

  return (
    <section className={css.wrapper}>
      <div className={css.infoPanel}>
        <span>Количество пользователей - </span> <span>{userNumber}</span>
      </div>
      <UserList />
    </section>
  );
};
