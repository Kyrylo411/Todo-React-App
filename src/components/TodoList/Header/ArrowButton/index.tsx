import React, { FC } from 'react';
import classNames from 'classnames';

import './ArrowButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetTodoList } from '../../../../redux/selectors/todo';
import { toggleAllItemsRequest } from '../../../../redux/actions/actionCreators/todoListActionCreators';
import { useTheme } from '../../../ThemeProvider';
import { memo } from 'react';
import { useCallback } from 'react';

const ArrowButton: FC = () => {
  const todoItemList = useSelector(GetTodoList);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleClick = useCallback(() => {
    const isAllItemsChecked = todoItemList.every((item) => item.done === true);
    dispatch(toggleAllItemsRequest(isAllItemsChecked));
  }, [todoItemList]);

  const arrowClass = classNames({
    arrow: true,
    arrowVisible: todoItemList.length,
    arrowDark: todoItemList.every((item) => item.done === true),
    darkTheme: theme,
    darkThemeAll: theme && todoItemList.every((item) => item.done === true),
  });

  return (
    <div>
      <div className={arrowClass} onClick={handleClick}>
        ❯
      </div>
    </div>
  );
};

export default memo(ArrowButton);
