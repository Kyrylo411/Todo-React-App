import React, { FC } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeItemCheckRequest } from '../../../../../redux/actions/actionCreators/todoListActionCreators';

import './CheckBox.scss';

interface Props {
  id: string;
  isChecked: boolean;
}

const CheckBox: FC<Props> = ({ id, isChecked }) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    dispatch(changeItemCheckRequest({ id, checked }));
  }, []);
  return (
    <label className="container">
      <input
        onChange={handleChange}
        type="checkBox"
        checked={isChecked}
        onClick={handleClick}
      />
      <span className="checkmark" />
    </label>
  );
};

export default memo(CheckBox);
