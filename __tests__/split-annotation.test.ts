import {splitAnnotation} from "../src/reducers/utils/split-annotations";
import '../src/array';

describe('splitAnnotation', () => {
	test('splitAnnotation: on start point', () => {
		const received = splitAnnotation({start: 3, end: 4}, [3]);
		const expected = [
			{ start: 3, end: 4 },
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: point in between', () => {
		const received = splitAnnotation({start: 3, end: 5}, [4]);
		const expected = [
			{ start: 3, end: 4, _first: true },
			{ start: 4, end: 5, _last: true },
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
			{ start: 0, end: 4, _first: true },
			{ start: 4, end: 11, _segment: true },
			{ start: 11, end: 16, _segment: true },
			{ start: 16, end: 19, _last: true },
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: multiple split points 2', () => {
		const received = splitAnnotation({start: 2, end: 9}, [3, 7]);
		const expected = [
			{ start: 2, end: 3, _first: true },
			{ start: 3, end: 7, _segment: true },
			{ start: 7, end: 9, _last: true },
		];
		expect(received).toEqual(expected);
	});
});
