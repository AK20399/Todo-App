import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditData = ({
	history: {
		location: { state },
	},
}) => {
	const history = useHistory();

	let { paramId } = useParams();

	const [title, setTitle] = useState(state.title);
	const [body, setBody] = useState(state.body);

	const editedData = (e) => {
		e.preventDefault();
		history.push('/', { id: paramId, title, body });
	};

	return (
		<form
			className='container'
			style={{ flexDirection: 'column' }}
			onSubmit={editedData}
		>
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
					placeholder='Edit Title'
					aria-describedby='basic-addon1'
				/>
			</div>
			<div className='input-group mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='basic-addon1'>
						Body
					</span>
				</div>
				<input
					type='text'
					value={body}
					onChange={(e) => setBody(e.target.value)}
					className='form-control'
					placeholder='Edit Body'
					aria-describedby='basic-addon1'
				/>
			</div>
			<input className='btn btn-danger' type='submit' value='Edit Todo' />
		</form>
	);
};

export default EditData;
