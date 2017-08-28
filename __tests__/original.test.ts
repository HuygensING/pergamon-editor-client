import createTree from '../src/reducers/utils/to-tree';
import {byDisplayStartEnd, byStartEnd} from "../src/reducers/utils/sort";
import {splitAnnotations, toSplitPoints} from "../src/reducers/utils/split-annotations";
import {
	annotations,
	annotationsWithRow,
	annotationsSorted,
	annotationsSplitted,
	tree
} from './data/original';
import {addRow} from "../src/reducers/utils/add-row";

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
		const expected = [30, 31];
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
