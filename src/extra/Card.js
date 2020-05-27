import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ deleteTodo, data, editTodo }) => {
	let history = useHistory();
	const todoClicked = (e) => {
		const node = e.target;

		if (node.nodeName === 'DIV') {
			alert(`Title  :  ${data.title}\nDescription :  ${data.body}`);
		}
	};
	const editClicked = (e) => {
		history.push(`/edit/${data.id}`, { title: data.title, body: data.body });
	};

	return (
		<div
			className='card'
			style={{ width: '18rem', margin: '30px', cursor: 'pointer' }}
			onClick={todoClicked}
			data-id='mainCard'
		>
			<div className='card-body'>
				<span
					className='card-title'
					style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}
				>
					{data.title}
				</span>
				<div style={{ float: 'right', cursor: 'pointer' }}>
					<span
						style={{
							marginRight: 30,
							backgroundColor: 'black',
							color: 'white',
							padding: 5,
						}}
						// onClick={editClicked}
						onClick={() => editTodo(data.id)}
					>
						Edit
					</span>

					<span
						style={{
							padding: 5,
						}}
						onClick={() => deleteTodo(data.id)}
					>
						X
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
