import { useEffect, useState } from 'react';

import { UserName } from '@features/userName';
import { UserField } from '@features/userDataField';
import { Button } from '@shared/ui';

import { dataDesc } from '@shared/model/type';
import { isDataTheSame } from '@shared/lib/objValueComparator';

import css from './userData.module.css';

type userDataProps = {
  data: dataDesc;
  onUpdateUser: (data: dataDesc) => void;
};

export const UserData = ({ data, onUpdateUser }: userDataProps) => {
  const [currentUser, setCurrentUser] = useState<dataDesc>({ ...data });
  const [isTheSameData, setIsTheSameData] = useState(false);

  const { name, jobTitle, department, company } = currentUser;

  const onUpdateUserField = (value: string, type: string) => {
    const changedUser = { ...currentUser, [type]: value };
    setCurrentUser({ ...changedUser });
    setIsTheSameData(isDataTheSame(data, changedUser));
  };

  const onSafeUserData = () => {
    onUpdateUser(currentUser);
  };

  useEffect(() => {
    setIsTheSameData(isDataTheSame(data, currentUser));
  }, [data]);

  return (
    <div className={css.wrapper}>
      <div className={css.fields}>
        <div className={css.userName}>
          <UserName initValue={name} type="name" onUpdate={onUpdateUserField} />
        </div>
        <div className={css.userData}>
          <div>
            <span>job Title</span>
            <UserField
              value={jobTitle}
              type="jobTitle"
              onUpdate={onUpdateUserField}
            />
          </div>
          <div>
            <span>Department</span>
            <UserField
              value={department}
              type="department"
              onUpdate={onUpdateUserField}
            />
          </div>
          <div>
            <span>Company</span>
            <UserField
              value={company}
              type="company"
              onUpdate={onUpdateUserField}
            />
          </div>
        </div>
      </div>
      <Button
        title="Safe data"
        onUpdate={onSafeUserData}
        isDisabled={isTheSameData}
      />
    </div>
  );
};
