import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@material-ui/core';
import Header from '../../components/TodoList/Header';
import List from '../../components/TodoList/List';
import Footer from '../../components/TodoList/Footer';
import UnderLines from '../../components/TodoList/UnderLines';
import './TodoList.scss';
import { Filter, FilterTypes } from '../../interfaices/todos';
import Page from '../../components/Page';
import { getItemLisRequest } from '../../redux/actions/actionCreators/todoListActionCreators';
import { TodoListLoading } from '../../redux/selectors/todo';

const TodoList: FC = () => {
	const [activeFilter, setActiveFilter] = useState<FilterTypes>(Filter.All);
	const dispatch = useDispatch();
	const loading = useSelector(TodoListLoading);

	const changeActiveFilter = (textValue: FilterTypes): void => {
		setActiveFilter(Filter[textValue]);
	};

	useEffect(() => {
		dispatch(getItemLisRequest());
	}, []);

	return (
		<Page>
			<h1 className="todos">todos</h1>
			{loading ? (
				<CircularProgress />
			) : (
				<div className="todoWrapper">
					<Header />
					<List activeFilter={activeFilter} />
					<Footer
						setActiveFilter={changeActiveFilter}
						activeFilter={activeFilter}
					/>
				</div>
			)}
			<UnderLines />
		</Page>
	);
};

export default TodoList;
