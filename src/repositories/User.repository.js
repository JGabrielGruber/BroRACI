import firebase from 'firebase';
import { db } from '../configFirebase';
import User from '../models/User.model';

const collection = 'users';

export default {
	login: async (log) => {
		try {
			await firebase.auth().setPersistence(
				log.remember
					? firebase.auth.Auth.Persistence.LOCAL
					: firebase.auth.Auth.Persistence.SESSION,
			);
			await firebase.auth().signInWithEmailAndPassword(log.email, log.password);
			return true;
		} catch (error) {
			return false;
		}
	},
	signup: async (sig) => {
		try {
			await firebase.auth().createUserWithEmailAndPassword(sig.email, sig.password);
			await firebase.auth().signInWithEmailAndPassword(sig.email, sig.password);
			await firebase.auth().currentUser.updateProfile(sig);
			const user = firebase.auth().currentUser;
			db.collection(collection).doc(user.uid).set({
				displayName: user.displayName,
				photoURL: user.photoURL,
				email: user.email,
				phoneNumber: user.phoneNumber,
			});
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},
	logout: async () => {
		await firebase.auth().signOut();
	},
	get: async () => firebase.auth().currentUser,
	getByEmail: async (email) => db.collection(collection).where('email', '==', email).get().then((qSnap) => {
		let u = null;
		qSnap.forEach((snap) => {
			u = snap.data();
		});
		return u;
	}),
};
