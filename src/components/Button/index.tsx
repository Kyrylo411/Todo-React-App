import React, { FC } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface Props {
  value: string;
  active: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({ value, active, onClick }) => {
  const handleClick = () => onClick();
  return (
    <button
      className={classNames({
        button: true,
        active: active,
      })}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
