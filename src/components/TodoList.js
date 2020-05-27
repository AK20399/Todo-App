import React, { useState, useEffect } from 'react';

// extra
import Card from '../extra/Card';

const TodoList = (props) => {
	const [data, setData] = useState(props.todos);

	return (
		<div>
			{data.map((item) => (
				<Card key={item.id}>{item.title}</Card>
			))}
		</div>
	);
};

export default TodoList;
