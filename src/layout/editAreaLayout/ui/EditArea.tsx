import { useSelector } from 'react-redux';

import { UserData } from '@widgets/userData';
import { currentUserSelector } from '@widgets/userList/model/selectors';
import { EditPreview } from '@entities/editPreview';

export const EditAreaLayout = () => {
  const { currentUser } = useSelector(currentUserSelector);

  return (
    <section>{currentUser.id !== '' ? <UserData /> : <EditPreview />}</section>
  );
};
