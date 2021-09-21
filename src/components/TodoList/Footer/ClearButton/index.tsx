import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCompletedRequest } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { GetTodoList } from '../../../../redux/selectors/todo';
import './ClearButton.scss';

const ClearButton: FC = () => {
  const todoItemList = useSelector(GetTodoList);
  const dispatch = useDispatch();

  const handleClick = () => {
    const checkeditems = todoItemList.filter((item) => item.done === true);
    dispatch(deleteCompletedRequest(checkeditems));
  };

  const findCheckedItem = (): boolean => {
    return todoItemList.some((item) => item.done === true);
  };
  return findCheckedItem() ? (
    <button onClick={handleClick} className="clearButton">
      Clear Completed
    </button>
  ) : null;
};

export default memo(ClearButton);
