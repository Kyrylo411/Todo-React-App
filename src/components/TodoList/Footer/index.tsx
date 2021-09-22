import React, { FC, useMemo, memo } from 'react';

import ClearButton from './ClearButton';
import ButtonGroup from './ButtonGroup';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { GetTodoList } from '../../../redux/selectors/todo';
import { useTheme } from '../../ThemeProvider';

interface Props {
  activeFilter: string;
  setActiveFilter: (textValue: string) => void;
}

const Footer: FC<Props> = ({ activeFilter, setActiveFilter }) => {
  const theme = useTheme();
  const todoItemList = useSelector(GetTodoList);

  const itemsLeft = useMemo(() => {
    const notCheckeditems = todoItemList.filter((item) => item.done === false);
    return notCheckeditems.length > 1 || notCheckeditems.length === 0
      ? `${notCheckeditems.length} items left`
      : `${notCheckeditems.length} item left`;
  }, [todoItemList]);

  return todoItemList.length ? (
    <div className={theme ? 'footer footerDark' : 'footer'}>
      <p>{itemsLeft}</p>
      <ButtonGroup
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <ClearButton />
    </div>
  ) : null;
};

export default memo(Footer);
