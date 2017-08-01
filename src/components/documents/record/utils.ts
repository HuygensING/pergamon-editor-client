import componentsByTag from './tags';

export const byStartEnd = (a, b) => {
	if (a.start > b.start) return 1;
	if (b.start > a.start) return -1;
	if (a.start === b.start) {
		if (a.end > b.end) return -1;
		if (b.end > a.end) return 1;
	}
	return 0;
};

export const byDisplayStartEnd = (a, b) => {
	// if (!componentsByTag.hasOwnProperty(a.type)) a.type = 'text';
	// if (!componentsByTag.hasOwnProperty(b.type)) b.type = 'text';
	const aDisplay = componentsByTag[a.type].display;
	const bDisplay = componentsByTag[b.type].display;

	// If display prop are not the same, 'block' get precedence over 'inline'
	// If display prop is equal, look at start and end prop
	if (aDisplay !== bDisplay) {
		return (aDisplay === 'inline') ? 1 : -1;
	} else {
		return byStartEnd(a, b);
	}
};

export const byRowStartEnd = (a, b) => {
	if (a.row > b.row) return 1;
	if (b.row > a.row) return -1;
	if (a.row === b.row) {
		return byStartEnd(a, b);
	}
};

export const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);

export const addRow = () => {
	const rows = [[]];
	return annotation => {
		const space = [];
		for (let row = 0; row < rows.length; row++) {
			const annotationsInRow = rows[row];
			const isRowWithSpace = annotationsInRow.reduce((hasSpace, curr) => {
				return hasSpace && !hasOverlap(annotation, curr);
			}, true);

			if (isRowWithSpace) {
				space[row] = null;
			} else {
				space[row] = annotationsInRow
					.filter(a => hasOverlap(annotation, a))
					.some(a => componentsByTag[a.type].display === 'block');
			}
		}

		const highestBlockIndex = space.lastIndexOf(true);
		let rowIndex = space.findIndex((x, i) => x == null && i > highestBlockIndex);
		if (rowIndex === -1) {
			const newLength = rows.push([annotation]);
			rowIndex = newLength - 1;
		} else {
			rows[rowIndex].push(annotation);
		}
		annotation.row = rowIndex;

		return annotation;
	}
};

// export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
