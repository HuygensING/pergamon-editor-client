export const annotations = [
	{
		start: 2,
		end: 38,
		type: 'underline',
	},
	{
		start: 6,
		end: 29,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 16,
		type: 'bold',
	},
	{
		start: 31,
		end: 71,
		type: 'paragraph',
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
		start: 2,
		end: 38,
		type: 'underline',
	},
	{
		start: 8,
		end: 16,
		type: 'bold',
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
		type: 'paragraph',
		row: 0,
	},
	{
		start: 31,
		end: 71,
		type: 'paragraph',
		row: 0,
	},
	{
		start: 2,
		end: 38,
		type: 'underline',
		row: 1,
	},
	{
		start: 8,
		end: 16,
		type: 'bold',
		row: 2,
	},
	{
		start: 34,
		end: 35,
		type: 'italic',
		row: 2,
	}
];

export const annotationsSortedByRow = [
	{
		start: 2,
		end: 38,
		row: 0,
	},
	{
		start: 6,
		end: 29,
		row: 1,
	},
	{
		start: 31,
		end: 71,
		row: 1,
	},
	{
		start: 8,
		end: 16,
		row: 2,
	},
	{
		start: 34,
		end: 35,
		row: 2,
	}
];

export const annotationsSplitted = [
	{
		start: 6,
		end: 29,
		type: 'paragraph',
		row: 0,
	},
	{
		start: 31,
		end: 71,
		type: 'paragraph',
		row: 0,
	},
	{
		start: 2,
		end: 5,
		type: 'underline',
		row: 1,
	},
	{
		start: 6,
		end: 29,
		type: 'underline',
		row: 1,
	},
	{
		start: 30,
		end: 30,
		type: 'underline',
		row: 1,
	},
	{
		start: 31,
		end: 38,
		type: 'underline',
		row: 1,
	},
	{
		start: 8,
		end: 16,
		type: 'bold',
		row: 2,
	},
	{
		start: 34,
		end: 35,
		type: 'italic',
		row: 2,
	}
];

export const tree = [
	{
		start: 2,
		end: 5,
		type: 'underline',
		row: 1,
	},
	{
		start: 6,
		end: 29,
		type: 'paragraph',
		row: 0,
		children: [
			{
				start: 6,
				end: 29,
				type: 'underline',
				row: 1,
				children: [
					{
						start: 8,
						end: 16,
						type: 'bold',
						row: 2,
					},
				]
			},
		]
	},
	{
		start: 30,
		end: 30,
		type: 'underline',
		row: 1,
	},
	{
		start: 31,
		end: 71,
		type: 'paragraph',
		row: 0,
		children: [
			{
				start: 31,
				end: 38,
				type: 'underline',
				row: 1,
				children: [
					{
						start: 34,
						end: 35,
						type: 'italic',
						row: 2,
					}
				]
			},
		]
	},
];
