// The original test data.

export const annotations = [
	{
		start: 6,
		end: 30,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
	},
	{
		start: 23,
		end: 39,
		type: 'underline',
	},
	{
		start: 34,
		end: 36,
		type: 'italic',
	}
];

export const annotationsSorted = [
	{
		start: 6,
		end: 30,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
	},
	{
		start: 23,
		end: 39,
		type: 'underline',
	},
	{
		start: 34,
		end: 36,
		type: 'italic',
	}
];

export const annotationsWithRow = [
	{
		start: 6,
		end: 30,
		row: 0,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 72,
		row: 0,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 17,
		row: 1,
		type: 'bold',
	},
	{
		start: 23,
		end: 39,
		row: 1,
		type: 'underline',
	},
	{
		start: 34,
		end: 36,
		row: 2,
		type: 'italic',
	}
];

export const annotationsSplitted = [
	{
		start: 6,
		end: 30,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
	},
	{
		start: 23,
		end: 30,
		type: 'underline',
	},
	{
		start: 30,
		end: 31,
		type: 'underline',
	},
	{
		start: 31,
		end: 39,
		type: 'underline',
	},
	{
		start: 34,
		end: 36,
		type: 'italic',
	}
];

export const tree = [
	{
		start: 6,
		end: 30,
		type: 'paragraph',
		children: [
			{
				start: 8,
				end: 17,
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
		start: 30,
		end: 31,
		type: 'underline',
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
		children: [
			{
				start: 31,
				end: 39,
				type: 'underline',
				children: [
					{
						start: 34,
						end: 36,
						type: 'italic',
					}
				]
			},
		]
	},
];
