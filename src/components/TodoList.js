import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

// components
import AddTodo from './AddTodo';
import Card from '../extra/Card';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ id: uuidv4(), title: 'a', body: 'abc' },
		{ id: uuidv4(), title: 'b', body: 'xyz' },
	]);

	const addNewTodo = (title, description) => {
		let data = {
			id: uuidv4(),
			title,
			body: description,
		};

		setTodos((prev) => [data, ...prev]);
	};

	const deleteTodo = (id) => {
		let newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div
			className='App'
			style={{
				display: 'flex',
				width: '800px',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AddTodo adding={addNewTodo} />
			<div>
				{todos.map((item) => (
					<Card key={item.id} deleteTodo={deleteTodo} data={item} />
				))}
			</div>
		</div>
	);
};

export default TodoList;
