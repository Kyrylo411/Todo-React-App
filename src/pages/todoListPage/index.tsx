import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/TodoList/Header';
import List from '../../components/TodoList/List';
import Footer from '../../components/TodoList/Footer';
import UnderLines from '../../components/TodoList/UnderLines';
import './TodoList.scss';
import { Filter } from '../../interfaices/todos';
import Page from '../../components/Page';
import { getItemLisRequest } from '../../redux/actions/actionCreators/todoListActionCreators';

const TodoList: FC = () => {
	const [activeFilter, setActiveFilter] = useState<Filter>('All');
	const dispatch = useDispatch();

	const changeActiveFilter = (textValue: Filter): void => {
		setActiveFilter(textValue);
	};

	useEffect(() => {
		dispatch(getItemLisRequest());
	}, []);

	return (
		<Page>
			<h1 className="todos">todos</h1>
			<div className="todoWrapper">
				<Header />
				<List activeFilter={activeFilter} />
				<Footer
					setActiveFilter={changeActiveFilter}
					activeFilter={activeFilter}
				/>
			</div>
			<UnderLines />
		</Page>
	);
};

export default TodoList;
