import React, { FC, useMemo } from 'react';

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
  const todoItemList = useSelector(GetTodoList);
  const theme = useTheme();
  const itemsLeft = useMemo(() => {
    const notCheckeditems = todoItemList.filter((item) => item.done === false);
    return notCheckeditems.length > 1 || notCheckeditems.length === 0
      ? `${notCheckeditems.length} items left`
      : `${notCheckeditems.length} item left`;
  }, [todoItemList.length]);

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

export default Footer;
