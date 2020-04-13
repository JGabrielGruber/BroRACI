import firebase from 'firebase';

const firebaseConfig = {
	authDomain: 'broracci.firebaseapp.com',
	databaseURL: 'https://broracci.firebaseio.com',
	projectId: 'broracci',
	storageBucket: 'broracci.appspot.com',
	messagingSenderId: '59818664178',
	appId: '1:59818664178:web:edfb640334e5eeed8b706b',
};

firebase.initializeApp({
	...firebaseConfig,
	apiKey: process.env.REACT_APP_APIKEY,
});

export default function initializeFirebase() {
	return firebase.app;
}

export const db = firebase.firestore();
