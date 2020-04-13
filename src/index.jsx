import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';

import Root from './components/Root.component';
import * as serviceWorker from './serviceWorker';
import { firebaseConfig } from './.config';

firebase.initializeApp({
	...firebaseConfig,
	apiKey: process.env.REACT_APP_APIKEY,
});

ReactDOM.render(
	<Root />,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
