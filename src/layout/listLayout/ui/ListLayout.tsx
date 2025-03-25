import { useSelector } from 'react-redux';

import { UserList } from '@widgets/userList';
import { usersSelector } from '@widgets/userList/model/selectors';
import { EditPreview } from '@entities/editPreview';

import css from './css.module.css';

export const ListLayout = () => {
  const { userNumber } = useSelector(usersSelector);
  const { innerWidth, innerHeight } = window;
  const smallScreens = innerWidth < 840;

  const fixGap = 250;
  const height = smallScreens ? `${innerHeight - fixGap}px` : '100%';

  return (
    <section className={css.wrapper}>
      {smallScreens && <EditPreview />}
      <div className={css.infoPanel}>
        <span>Количество пользователей - </span> <span>{userNumber}</span>
      </div>
      <UserList height={height} />
    </section>
  );
};
