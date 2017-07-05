import createTree from '../src/components/standoff/create-tree';
import {splitAnnotations, toSplitPoints} from "../src/components/standoff/split-annotations";
import { annotationsWithRow, annotationsSortedByRow, annotationsSplitted, tree } from './data/set1';
import {byRowDisplayStartEnd, byStartEnd} from "../src/components/standoff/utils";

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, []);
		const expected = [5, 29, 30];
		expect(received).toEqual(expected);
	});
});

describe('splitAnnotations', () => {
	test('splitAnnotations: second', () => {
		const received = annotationsWithRow
			.reduce(splitAnnotations(), [])
		expect(received).toEqual(annotationsSplitted);
	});
});

describe('createTree', () => {
	test('createTree 1', () => {
		const received = annotationsSplitted
			.sort(byStartEnd)
			.reduce(createTree, []);
		expect(received).toEqual(tree);
	})
});
