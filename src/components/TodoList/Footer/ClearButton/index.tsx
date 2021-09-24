import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCompletedRequest } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { GetTodoList } from '../../../../redux/selectors/todo';
import './ClearButton.scss';

const ClearButton: FC = () => {
  const todoItemList = useSelector(GetTodoList);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    const checkeditems = todoItemList.filter((item) => item.done === true);
    dispatch(deleteCompletedRequest(checkeditems));
  }, [todoItemList]);

  const findCheckedItem = useCallback((): boolean => {
    return todoItemList.some((item) => item.done === true);
  }, [todoItemList]);

  return findCheckedItem() ? (
    <button onClick={handleClick} className="clearButton">
      Clear Completed
    </button>
  ) : null;
};

export default memo(ClearButton);
