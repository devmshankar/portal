import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/">
					<div className="app h-screen w-screen bg-black text-white">
						<h1>Hello react app</h1>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
