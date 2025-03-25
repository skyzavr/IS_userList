import { RefObject, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListItem } from '@shared/ui';
import { IOoptions } from '@shared/model/type';
import { useObserver } from '@shared/lib/useObserver';

import { setUsersList } from '../model/userSlice';
import { usersSelector, currentUserSelector } from '../model/selectors';
import { setCurrentUser } from '../model/currentUserSlice';

import css from './userList.module.css';

type userListProps = { height: string };

export const UserList = ({ height }: userListProps) => {
  const dispatch = useDispatch();

  const { users } = useSelector(usersSelector);
  const { currentUser } = useSelector(currentUserSelector);

  const options: IOoptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  const [node, isIntersecting] = useObserver(options);

  const onSetCurrentUser = (id: string) => {
    const ind = users.findIndex((el) => el.id === id);
    dispatch(setCurrentUser(users[ind]));
  };

  useEffect(() => {
    if (!isIntersecting) return;
    dispatch(setUsersList(100));
  }, [isIntersecting]);

  const userList = users.map(({ id, name }) => (
    <ListItem
      key={id}
      title={name}
      onSetItem={() => onSetCurrentUser(id)}
      isActive={id === currentUser.id}
    />
  ));

  return (
    <ul className={css.wrapper} style={{ height }}>
      {users.length > 0 ? userList : 'loading'}
      <div ref={node as RefObject<HTMLDivElement>}>
        <ListItem key="-1" />
      </div>
    </ul>
  );
};
