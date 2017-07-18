import {hasOverlap} from "./utils";

export const toSplitPoints = (splitPoints, curr, index, arr) => {
	if (index === 0) return splitPoints;
	const prevAnnotations = arr.slice(0, index);
	prevAnnotations.forEach((prev) => {
		if (hasOverlap(prev, curr)) {
			if (prev.end > curr.start && prev.end < curr.end) {
				splitPoints.push(prev.end);
			}
			if (prev.start > curr.start && prev.start < curr.end) {
				splitPoints.push(prev.start)
			}
		}
	});

	return [...new Set(splitPoints)]
		.sort((a: number, b: number) => a - b); // Sort numerically
};

export const splitAnnotation = (annotation, splitPoints) => {
	if (annotation.start !== splitPoints[0]) {
		splitPoints = [annotation.start].concat(splitPoints);
	}
	if (annotation.end !== splitPoints[splitPoints.length - 1]) {
		splitPoints = splitPoints.concat(annotation.end);
	}

	return splitPoints.reduce((agg, curr, index, arr) => {
		if (index === arr.length - 1) return agg;

		let to = arr[index + 1];
		agg.push({...annotation, ...{start: curr, end: to}});
		return agg;
	}, []);
};

export const splitAnnotations = () => {
	let splitPointIndex = 0;
	let splitPoints;
	const extractSplitPoints = (arr) => {
		splitPoints = arr.reduce(toSplitPoints, [])
			.map((sp) => ({
				value: sp,
				active: false,
			}));
	};

	return (agg, curr, index, arr) => {
		if (splitPoints == null) extractSplitPoints(arr);
		if (!splitPoints.length) {
			agg.push(curr);
			return agg;
		}
		let currSplitPoint = splitPoints[splitPointIndex];
		if (curr.start > currSplitPoint.value) {
			if (arr.length < splitPointIndex - 1) splitPointIndex += 1;
			currSplitPoint = splitPoints[splitPointIndex];
		}
		if (currSplitPoint == null) {
			agg.push(curr);
			return agg;
		}

		const splitPointsInCurr = splitPoints.filter((sp) => {
			return sp.active && sp.value > curr.start && sp.value < curr.end
		});

		if (splitPointsInCurr.length)	{
			agg = agg.concat(splitAnnotation(
				curr,
				splitPointsInCurr.map((sp) => sp.value)
			));
		} else {
			agg.push(curr);
		}

		for (let i = 0; i < splitPoints.length; i++) {
			const sp = splitPoints[i];
			if (sp.value === curr.start || sp.value === curr.end) sp.active = true;
		}

		return agg;
	};
};