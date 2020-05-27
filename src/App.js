import React, { useState } from 'react';

// components
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'a', body: 'abc' },
		{ id: 2, title: 'b', body: 'xyz' },
	]);

	const addNewTodo = (title, description) => {
		console.log(title, description);

		setTodos(() => {
			todos.unshift({ id: todos.length + 1, title, body: description });
		});
		console.log(todos);
	};

	return (
		<>
			<Header />
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
				<AddTodo addNewTodo={addNewTodo} />
				<TodoList todos={todos} />
			</div>
		</>
	);
}

export default App;
