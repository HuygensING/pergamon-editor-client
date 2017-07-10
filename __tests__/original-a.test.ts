import toTree from '../src/components/doc/create-tree';
import {splitAnnotations, toSplitPoints} from "../src/components/doc/split-annotations";
import { annotationsWithRow, annotationsSortedByRow, annotationsSplitted, tree } from './data/set1';
import {byRowDisplayStartEnd, byStartEnd} from "../src/components/doc/utils";

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

describe('toTree', () => {
	test('toTree 1', () => {
		const received = annotationsSplitted
			.sort(byStartEnd)
			.reduce(toTree, []);
		expect(received).toEqual(tree);
	})
});
