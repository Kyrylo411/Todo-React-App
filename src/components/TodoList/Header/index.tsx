import React, { FC, memo } from 'react';
import ArrowButton from './ArrowButton';
import Input from './Input';

import './Header.scss';
import { useTheme } from '../../ThemeProvider';

const Header: FC = () => {
  const theme = useTheme();
  return (
    <div className={theme ? 'inputContainer dark' : 'inputContainer'}>
      <ArrowButton />
      <Input />
    </div>
  );
};

export default memo(Header);
