import classNames from 'classnames';
import css from './button.module.css';
type btnProps = {
  title: string;
  onUpdate: () => void;
  isDisabled: boolean;
  btnType?: 'fill' | 'stroke';
};
export const Button = (props: btnProps) => {
  const { title, isDisabled, onUpdate, btnType = 'fill' } = props;

  return (
    <button
      disabled={isDisabled}
      className={classNames(css.wrapper, css[btnType])}
      onClick={onUpdate}
    >
      {title}
    </button>
  );
};
