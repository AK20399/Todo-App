import React from 'react';

const Card = ({ deleteTodo, data }) => {
	const todoClicked = () => {
		console.log('todoClicked');
	};

	return (
		<div
			className='card'
			style={{ width: '18rem', margin: '30px', cursor: 'pointer' }}
			onClick={todoClicked}
		>
			<div className='card-body'>
				<span
					className='card-title'
					style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}
				>
					{data.title}
				</span>
				<div style={{ float: 'right', cursor: 'pointer' }}>
					<span>Edit</span>

					<span onClick={() => deleteTodo(data.id)}>X</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
