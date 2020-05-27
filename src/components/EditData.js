import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditData = ({
	history: {
		location: { state },
	},
}) => {
	let { paramId } = useParams();
	const [id, setId] = useState(paramId);
	const [title, setTitle] = useState(state.title);
	const [body, setBody] = useState(state.body);

	return (
		<div className='container' style={{ flexDirection: 'column' }}>
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
		</div>
	);
};

export default EditData;
