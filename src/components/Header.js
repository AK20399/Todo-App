import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const history = useHistory();
	return (
		<div
			style={{
				backgroundColor: 'black',
				color: 'white',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				height: '100px',
				cursor: 'pointer',
			}}
			onClick={() => history.push('/')}
		>
			<h4>TodoApp</h4>
		</div>
	);
};

export default Header;
