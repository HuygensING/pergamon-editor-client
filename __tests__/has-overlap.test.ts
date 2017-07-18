import {hasOverlap} from "../src/components/doc/utils";

describe('hasOverlap', () => {
	test('hasOverlap 1', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 6, end: 10 })).toBeFalsy();
	});

	test('hasOverlap 2', () => {
		expect(hasOverlap({ start: 6, end: 10 }, { start : 0, end: 5 })).toBeFalsy();
	});

	test('hasOverlap 3', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 5, end: 10 })).toBeFalsy();
	});

	test('hasOverlap 3b', () => {
		expect(hasOverlap({ start: 6, end: 11 }, { start : 2, end: 6 })).toBeFalsy();
	});

	test('hasOverlap 4', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 0, end: 5 })).toBeTruthy();
	});

	test('hasOverlap 5', () => {
		expect(hasOverlap({ start: 0, end: 5 }, { start : 3, end: 8 })).toBeTruthy();
	});

	test('hasOverlap 6', () => {
		expect(hasOverlap({ start: 5, end: 10 }, { start : 0, end: 7 })).toBeTruthy();
	});
});
