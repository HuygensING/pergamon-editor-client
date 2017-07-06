import createTree from '../src/components/standoff/create-tree';
import {byStartEnd, hasOverlap, addRow, byRowStartEnd} from "../src/components/standoff/utils";
import {splitAnnotation, splitAnnotations, toSplitPoints} from "../src/components/standoff/split-annotations";
import { annotations, annotationsWithRow, annotationsSortedByRow, annotationsSplitted, tree } from './data/set2';

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotations.map(addRow());
		expect(received).toEqual(annotationsWithRow);
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsSortedByRow.reduce(toSplitPoints, []);
		const expected = [3, 7];
		expect(received).toEqual(expected);
	});
});

describe('splitAnnotation', () => {
	test('splitAnnotation: on start point', () => {
		const received = splitAnnotation({start: 3, end: 4}, [3]);
		const expected = [
			{ start: 3, end: 3 },
			{ start: 4, end: 4 },
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: point in between', () => {
		const received = splitAnnotation({start: 3, end: 5}, [4]);
		const expected = [
			{ start: 3, end: 4 },
			{ start: 5, end: 5 },
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: on end point', () => {
		const received = splitAnnotation({start: 3, end: 5}, [5]);
		const expected = [{ start: 3, end: 5 }];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: multiple split points 1', () => {
		const received = splitAnnotation({start: 0, end: 19}, [4, 11, 16]);
		const expected = [
			{ start: 0, end: 4 },
			{ start: 5, end: 11 },
			{ start: 12, end: 16 },
			{ start: 17, end: 19 },
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: multiple split points 2', () => {
		const received = splitAnnotation({start: 2, end: 9}, [3, 7]);
		const expected = [
			{ start: 2, end: 3 },
			{ start: 4, end: 7 },
			{ start: 8, end: 9 },
		];
		expect(received).toEqual(expected);
	});
});

describe('splitAnnotations', () => {
	test('splitAnnotations: second', () => {
		const received = annotationsSortedByRow
			.reduce(splitAnnotations(), [])
			.map((a) => { delete a.row; return a; });
		expect(received).toEqual(annotationsSplitted);
	});
});

describe('toTree', () => {
	test('toTree 1', () => {
		const received = annotationsSplitted
			.sort(byRowStartEnd)
			.reduce(createTree, []);
		expect(received).toEqual(tree);
	})
});
