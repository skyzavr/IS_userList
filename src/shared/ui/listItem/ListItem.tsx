import { ReactElement } from 'react';
import clNames from 'classnames';

import css from './listItem.module.css';

type listItemProps = {
  title?: string;
  isActive?: boolean;
  children?: ReactElement;
  onSetItem?: () => void;
};

export const ListItem = (props: listItemProps) => {
  const { title, children, onSetItem, isActive } = props;
  const itemClasses = clNames(css.wrapper, isActive ? css.active : '');

  return (
    <li className={itemClasses} onClick={onSetItem}>
      <span>{children}</span>
      {title}
    </li>
  );
};
