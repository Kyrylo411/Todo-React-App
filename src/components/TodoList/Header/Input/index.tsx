import React, { FC, useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addItemRequest } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { useTheme } from '../../../ThemeProvider';
import './Input.scss';

const Input: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleKeyDown = useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
    ) => {
      if (e.key === 'Enter') {
        if (e.target.value.trim()) {
          dispatch(addItemRequest(e.target.value));
          setValue('');
        }
      }
    },
    [],
  );

  return (
    <input
      className={theme ? 'input inputDark' : 'input'}
      value={value}
      placeholder="What needs to be done?"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
