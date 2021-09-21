import React, { FC, memo } from 'react';
import ArrowButton from './ArrowButton';
import Input from './Input';

import './Header.scss';

const Header: FC = () => {
  return (
    <div className="inputContainer">
      <ArrowButton />
      <Input />
    </div>
  );
};

export default memo(Header);
