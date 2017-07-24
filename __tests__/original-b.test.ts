import createTree from '../src/components/documents/create-tree';
import {addRow, byDisplayStartEnd} from "../src/components/documents/utils";
import {splitAnnotations, toSplitPoints} from "../src/components/documents/split-annotations";
import { annotations, annotationsWithRow, annotationsSplitted, tree } from './data/original-b';

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
