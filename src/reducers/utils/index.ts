export const updateProp = (state, props) => ({ ...state, ...props});

export const replaceItemInArray = (array, ...items) =>
	array.map(x => {
		const item = items.find(y => y.id === x.id);
		return item != null ? item : x;
	});

export const updatePropInArray = (array, id, callback) =>
	array.map((item, index) =>
		(item.id === id) ? updateProp(item, callback(item)) : item
	);

export const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);
