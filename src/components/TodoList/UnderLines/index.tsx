import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { GetTodoList } from '../../../redux/selectors/todo';
import './UnderLines.scss';

const UnderLines: FC = () => {
	const todoList = useSelector(GetTodoList);

	return todoList.length ? (
		<div className="underLines">
			<div className="firstLine" />
			<div className="secondLine" />
		</div>
	) : null;
};
export default UnderLines;
