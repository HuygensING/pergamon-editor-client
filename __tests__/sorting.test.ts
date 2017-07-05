import {addRow, byDisplayStartEnd, byRowDisplayStartEnd} from "../src/components/standoff/utils";
import {annotations as a1} from "./data/set1";
import {annotationsSorted as as1} from "./data/set1";
import {annotationsWithRow as awr1} from "./data/set1";
import {annotationsWithRow as awr2} from "./data/set2";
import {annotationsWithRow as awr3} from "./data/set3";
import {annotationsSortedByRow as asbr1} from "./data/set1";
import {annotationsSortedByRow as asbr2} from "./data/set2";
import {annotationsSortedByRow as asbr3} from "./data/set3";

describe('byDisplayStartEnd - set 1', () => {
	test('byDisplayStartEnd 1', () => {
		const received = a1.sort(byDisplayStartEnd);
		expect(received).toEqual(as1);
	})
});

describe('addRow', () => {
	test('addRow 1', () => {
		const received = as1.map(addRow());
		expect(received).toEqual(awr1);
	})
});

// describe('byRowDisplayStartEnd - set 2', () => {
// 	test('byRowDisplayStartEnd 1', () => {
// 		const received = awr2.sort(byRowDisplayStartEnd);
// 		expect(received).toEqual(asbr2);
// 	})
// });
//
// describe('byRowDisplayStartEnd - set 3', () => {
// 	test('byRowDisplayStartEnd 1', () => {
// 		const received = awr3.sort(byRowDisplayStartEnd);
// 		expect(received).toEqual(asbr3);
// 	})
// });
