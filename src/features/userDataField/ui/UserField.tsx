import { TextField } from '@shared/ui';

type userFieldProps = {
  value?: string;
  type: string;
  onUpdate: (value: string, type: string) => void;
};
export const UserField = (props: userFieldProps) => {
  const { value, onUpdate, type } = props;
  const onUpdateField = (value: string) => {
    onUpdate(value, type);
  };
  return <TextField initValue={value} onValueUpdate={onUpdateField} />;
};
