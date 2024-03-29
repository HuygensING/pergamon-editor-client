import createTree from '../src/reducers/utils/to-tree';
import {byDisplayStartEnd} from "../src/reducers/utils/sort";
import {splitAnnotations, toSplitPoints} from "../src/reducers/utils/split-annotations";
import { annotations, annotationsWithRow, annotationsSplitted, tree } from './data/original-b';
import {addRow} from "../src/reducers/utils/add-row";

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotations.map(addRow());
		expect(received).toEqual(annotationsWithRow);
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, []);
		const expected = [31, 32];
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
			.sort(byDisplayStartEnd)
			.reduce(createTree, []);
		expect(received).toEqual(tree);
	})
});
