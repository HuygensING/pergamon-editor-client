import fillGaps from "../src/components/documents/record/output/fill-gaps";

describe('fillGaps', () => {
	test('fillGaps', () => {
		const root = {
			children: [
				{ start: 6, end: 29 },
				{ start: 30, end: 31 },
				{ start: 31, end: 72 },
			],
			end: 79,
			start: 0,
		};

		const received = root.children.reduce(fillGaps(root), [])
			.map((x: any) => { delete x.id; delete x.type; return x; });

		const expected = [
			{ start: 0, end: 6 },
			{ start: 6, end: 29 },
			{ start: 29, end: 30 },
			{ start: 30, end: 31 },
			{ start: 31, end: 72 },
			{ start: 72, end: 79 },
		];
		expect(received).toEqual(expected);
	});
});
