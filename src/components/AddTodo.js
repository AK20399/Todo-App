import React, { useState } from 'react';

const AddTodo = ({ addNewTodo }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const SubmitData = (e) => {
		e.preventDefault();
		if (title === '' || description === '') {
			alert('Please Enter data in fields');
		} else {
			addNewTodo(title, description);
			setTitle('');
			setDescription('');
		}
	};

	return (
		<form onSubmit={SubmitData}>
			<div className='input-group mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='basic-addon1'>
						Title
					</span>
				</div>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='form-control'
					placeholder='Enter Title'
					aria-describedby='basic-addon1'
				/>
			</div>
			<div className='input-group mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='basic-addon1'>
						Description
					</span>
				</div>
				<input
					type='text'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='form-control'
					placeholder='Enter Description'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
			</div>
			<button type='submit' className='btn btn-success'>
				Add Todo
			</button>
		</form>
	);
};

export default AddTodo;
