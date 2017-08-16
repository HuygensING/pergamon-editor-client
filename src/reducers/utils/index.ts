export const updateProp = (state, props) =>
	({ ...state, ...props});

export const replaceItem = (array, item) =>
	array.map(x => x.id === item.id ? item : x);

export const updatePropInArray = (array, id, callback) =>
	array.map((item, index) =>
		(item.id === id) ? updateProp(item, callback(item)) : item
	);

export const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);
