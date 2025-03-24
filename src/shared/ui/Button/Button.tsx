import css from './button.module.css';
type btnProps = {
  title: string;
  onUpdate: () => void;
  isDisabled: boolean;
};
export const Button = (props: btnProps) => {
  const { title, isDisabled, onUpdate } = props;

  return (
    <button disabled={isDisabled} className={css.wrapper} onClick={onUpdate}>
      {title}
    </button>
  );
};
