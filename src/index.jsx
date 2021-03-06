import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import initializeFirebase from './configFirebase';
import AppContainer from './containers/App.container';

initializeFirebase();

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/:raci?" component={AppContainer} />
		</Switch>
	</Router>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
