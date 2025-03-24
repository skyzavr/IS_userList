import { ChangeEvent, useEffect, useState } from 'react';
import clNames from 'classnames';

import { useDebounce } from '@shared/lib/useDebounce';
import css from './textField.module.css';

type textFieldProps = {
  onValueUpdate: (value: string) => void;
  initValue?: string;
  isError?: boolean;
};

export const TextField = (props: textFieldProps) => {
  const { initValue, onValueUpdate, isError } = props;

  const [value, setValue] = useState(initValue || '');
  const debounce = useDebounce(value, 500);
  const classes = clNames(css.wrapper, isError ? css.error : '');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onValueUpdate(value.trim());
  }, [debounce]);

  return (
    <input
      type="text"
      placeholder="not specified"
      value={value}
      onChange={onChangeValue}
      className={classes}
    />
  );
};
