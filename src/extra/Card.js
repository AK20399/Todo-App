import React from 'react';

const Card = (props) => {
	return (
		<div className='card' style={{ width: '18rem', margin: '30px' }}>
			<div className='card-body'>
				<h5 className='card-title' style={{ textAlign: 'center' }}>
					{props.children}
				</h5>
			</div>
		</div>
	);
};

export default Card;
