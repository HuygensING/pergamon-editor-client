// The original test data.

export const annotations = [
	{
		start: 6,
		end: 29,
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

export const annotationsSorted = [
	{
		start: 6,
		end: 29,
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
		end: 29,
		row: 0,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 71,
		row: 0,
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
		row: 1,
		type: 'underline',
	},
	{
		start: 34,
		end: 35,
		row: 2,
		type: 'italic',
	}
];

export const annotationsSplitted = [
	{
		start: 6,
		end: 29,
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
		end: 29,
		type: 'underline',
	},
	{
		start: 30,
		end: 30,
		type: 'underline',
	},
	{
		start: 31,
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
		end: 29,
		type: 'paragraph',
		children: [
			{
				start: 8,
				end: 16,
				type: 'bold',
			},
			{
				start: 23,
				end: 29,
				type: 'underline',
			},
		]
	},
	{
		start: 30,
		end: 30,
		type: 'underline',
	},
	{
		start: 31,
		end: 71,
		type: 'paragraph',
		children: [
			{
				start: 31,
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
