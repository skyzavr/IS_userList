import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currentUserSelector } from '@widgets/userList/model/selectors';
import { updateUser } from '@widgets/userList/model/userSlice';
import { clearCurrentUSer } from '@widgets/userList/model/currentUserSlice';
import { UserName } from '@features/userName';
import { UserField } from '@features/userDataField';
import { Button } from '@shared/ui';
import { isDataTheSame } from '@shared/lib/objValueComparator';
import { dataDesc } from '@shared/model/type';

import css from './userData.module.css';

export const UserData = () => {
  const dispatch = useDispatch();
  const { currentUser: curUser } = useSelector(currentUserSelector);

  const [currentUser, setCurrentUser] = useState<dataDesc>({ ...curUser });
  const { name, jobTitle, department, company } = currentUser;
  const [isTheSameData, setIsTheSameData] = useState(false);

  const onUpdateUserField = (value: string, type: string) => {
    const changedUser = { ...currentUser, [type]: value };
    setCurrentUser({ ...changedUser });
    setIsTheSameData(isDataTheSame(curUser, changedUser));
  };

  const onSafeUserData = () => {
    dispatch(updateUser({ id: currentUser.id, data: currentUser }));
  };

  const onClose = () => {
    dispatch(clearCurrentUSer());
  };

  useEffect(() => {
    setCurrentUser({ ...curUser });
    setIsTheSameData(isDataTheSame(curUser, currentUser));
  }, [curUser]);

  return (
    <div className={css.wrapper}>
      <div className={css.fields}>
        <div className={css.userName}>
          <UserName initValue={name} type="name" onUpdate={onUpdateUserField} />
        </div>
        <div className={css.userData}>
          <div>
            <span>Должность</span>
            <UserField
              value={jobTitle}
              type="jobTitle"
              onUpdate={onUpdateUserField}
            />
          </div>
          <div>
            <span>Департамент</span>
            <UserField
              value={department}
              type="department"
              onUpdate={onUpdateUserField}
            />
          </div>
          <div>
            <span>Компания</span>
            <UserField
              value={company}
              type="company"
              onUpdate={onUpdateUserField}
            />
          </div>
        </div>
      </div>
      <div className={css.handleBtns}>
        <Button
          title="Сохранить данные"
          onUpdate={onSafeUserData}
          isDisabled={isTheSameData}
        />
        <Button
          title="Закрыть"
          onUpdate={onClose}
          isDisabled={false}
          btnType="stroke"
        />
      </div>
    </div>
  );
};
