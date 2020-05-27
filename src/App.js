import React from 'react';

// components
import Header from './components/Header';
import TodoList from './components/TodoList';
import EditData from './components/EditData';

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={TodoList} />
				<Route path='/edit/:paramId' component={EditData} />
				<Route path='/edit' component={EditData} />
			</Switch>
		</Router>
	);
}

export default App;
