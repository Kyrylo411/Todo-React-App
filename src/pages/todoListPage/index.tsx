import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { customJwtPayload } from '../../interfaices/jwtPayload';
import Header from '../../components/TodoList/Header';
import List from '../../components/TodoList/List';
import Footer from '../../components/TodoList/Footer';
import UnderLines from '../../components/TodoList/UnderLines';
import './TodoList.scss';
import { ITodoItem } from '../../interfaices/todos';
import { Filter } from '../../interfaices/todos';
import { getItemListAction } from '../../redux/actions/actionCreators/todoListActionCreators';
import Page from '../../components/Page';
import api from '../../http';

const TodoList: FC = () => {
	const [activeFilter, setActiveFilter] = useState<Filter>('All');
	const dispatch = useDispatch();

	const decodedToken: customJwtPayload = jwt_decode(
		localStorage.getItem('token'),
	);
	const userId = decodedToken._doc._id;

	const changeActiveFilter = (textValue: Filter): void => {
		setActiveFilter(textValue);
	};

	useEffect(() => {
		const getItemsToRender = async (): Promise<void> => {
			try {
				const res = await api.get<ITodoItem[]>(`/todolist/todo/${userId}`);
				dispatch(getItemListAction(res.data));
			} catch (e) {
				throw new Error(e);
			}
		};
		getItemsToRender();
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
