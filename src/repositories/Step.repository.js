import { db } from '../configFirebase';

const collection = 'steps';

export default {
	add: async (data) => (await db.collection(collection).add(data)).get().then((item) => item),
	get: async () => db.collection(collection).get(),
	sync: async (key, onChange) => db.collection(collection).onSnapshot((snap) => {
		const list = [];
		snap.forEach((item) => list.push({
			...item.data(),
			uid: item.id,
		}));
		onChange(key, list);
	}),
	getById: async (id) => db.collection(collection).doc(id).get(),
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
