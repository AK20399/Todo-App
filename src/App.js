import React from 'react';

// components
import Header from './components/Header';
import TodoList from './components/TodoList';

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' component={TodoList} />
			</Switch>
		</Router>
	);
}

export default App;
