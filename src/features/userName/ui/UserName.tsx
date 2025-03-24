import { useState } from 'react';
import { TextField } from '@shared/ui';

type userNameProps = {
  initValue: string;
  type: string;
  onUpdate: (value: string, type: string) => void;
};

export const UserName = (props: userNameProps) => {
  const { initValue, type, onUpdate } = props;

  const [isError, setIsError] = useState(false);

  const errorHandler = (value: string) => {
    const isEmptyField = value.trim() === '';
    return isEmptyField;
  };

  const onDataUpdate = (value: string) => {
    const errorValue = errorHandler(value);
    setIsError(errorValue);
    if (!errorValue) onUpdate(value, type);
  };

  return (
    <TextField
      initValue={initValue}
      onValueUpdate={onDataUpdate}
      isError={isError}
    />
  );
};
