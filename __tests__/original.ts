import createTree from '../src/components/doc/create-tree';
import {addRow, byDisplayStartEnd, byStartEnd} from "../src/components/doc/utils";
import {splitAnnotations, toSplitPoints} from "../src/components/doc/split-annotations";
import {
	annotations,
	annotationsWithRow,
	annotationsSorted,
	annotationsSplitted,
	tree
} from './data/original';

describe('byDisplayStartEnd - set 1', () => {
	test('byDisplayStartEnd 1', () => {
		const received = annotations.sort(byDisplayStartEnd);
		expect(received).toEqual(annotationsSorted);
	})
});

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotationsSorted.map(addRow());
		expect(received).toEqual(annotationsWithRow);
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, []);
		const expected = [29, 30];
		expect(received).toEqual(expected);
	});
});

describe('splitAnnotations', () => {
	test('splitAnnotations: second', () => {
		const received = annotationsWithRow
			.reduce(splitAnnotations(), [])
			.map((a) => { delete a.row; return a; });
		expect(received).toEqual(annotationsSplitted);
	});
});

describe('toTree', () => {
	test('toTree 1', () => {
		const received = annotationsSplitted
			.sort(byStartEnd)
			.reduce(createTree, []);
		expect(received).toEqual(tree);
	})
});
