import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

// components
import AddTodo from './AddTodo';
import Card from '../extra/Card';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

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
	const editTodo = (id) => {
		let title = window.prompt('Enter title');
		let description = window.prompt('Enter Description');

		let newTodos = [];
		for (let i in todos) {
			if (todos[i].id === id) {
				newTodos.push({
					id: id,
					title: title,
					body: description,
				});
			} else newTodos[i] = todos[i];
		}
		setTodos(newTodos);
	};

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
					<Card
						key={item.id}
						deleteTodo={deleteTodo}
						data={item}
						editTodo={editTodo}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
