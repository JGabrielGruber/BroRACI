import { db } from '../configFirebase';

const collection = 'raci';

export default {
	get: async () => db.collection(collection).get(),
	sync: async (key, onChange) => db.collection(collection).onSnapshot((snap) => {
		const list = [];
		snap.forEach((item) => list.push(item));
		onChange(key, list);
	}),
	getById: async (id) => (await db.collection(collection).doc(id).get()).data(),
	syncByUser: async (key, onChange, user) => db.collection(collection).where('users', 'array-contains', user).get().then((qSnap) => {
		const list = [];
		qSnap.forEach((snap) => list.push(snap.data()));
		onChange(key, list);
	}),
	syncById: async (key, onChange, id) => db.collection(collection).doc(id).onSnapshot((snap) => {
		onChange(key, {
			...snap.data(),
			uid: snap.id,
		});
	}),
	update: async (data) => db.collection(collection).doc(data.uid).set({
		...data,
	}),
};
