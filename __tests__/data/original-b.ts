// The original test data, but the first paragraph overlaps
// the second (by just one codepoint).

export const annotations = [
	{
		start: 6,
		end: 31,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 71,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 16,
		type: 'bold',
	},
	{
		start: 23,
		end: 38,
		type: 'underline',
	},
	{
		start: 34,
		end: 35,
		type: 'italic',
	}
];

export const annotationsWithRow = [
	{
		start: 6,
		end: 31,
		row: 0,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 71,
		row: 1,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 16,
		row: 1,
		type: 'bold',
	},
	{
		start: 23,
		end: 38,
		row: 2,
		type: 'underline',
	},
	{
		start: 34,
		end: 35,
		row: 3,
		type: 'italic',
	}
];

export const annotationsSplitted = [
	{
		start: 6,
		end: 31,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 31,
		type: 'paragraph',
	},
	{
		start: 32,
		end: 71,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 16,
		type: 'bold',
	},
	{
		start: 23,
		end: 30,
		type: 'underline',
	},
	{
		start: 31,
		end: 31,
		type: 'underline',
	},
	{
		start: 32,
		end: 38,
		type: 'underline',
	},
	{
		start: 34,
		end: 35,
		type: 'italic',
	}
];

export const tree = [
	{
		start: 6,
		end: 31,
		type: 'paragraph',
		children: [
			{
				start: 31,
				end: 31,
				type: 'paragraph',
				children: [
					{
						start: 31,
						end: 31,
						type: 'underline',
					}
				]
			},
			{
				start: 8,
				end: 16,
				type: 'bold',
			},
			{
				start: 23,
				end: 30,
				type: 'underline',
			},
		]
	},
	{
		start: 32,
		end: 71,
		type: 'paragraph',
		children: [
			{
				start: 32,
				end: 38,
				type: 'underline',
				children: [
					{
						start: 34,
						end: 35,
						type: 'italic',
					}
				]
			},
		]
	},
];
