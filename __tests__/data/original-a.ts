// The original data set, but the original underline goes from
// 23 to 38. If 23 is changed to 2, the underline (an inline el),
// crosses the two paragraphs (block elements).

export const annotations = [
	{
		start: 2,
		end: 39,
		type: 'underline',
	},
	{
		start: 6,
		end: 30,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
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
		start: 2,
		end: 39,
		type: 'underline',
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
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
		type: 'paragraph',
		row: 0,
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
		row: 0,
	},
	{
		start: 2,
		end: 39,
		type: 'underline',
		row: 1,
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
		row: 2,
	},
	{
		start: 34,
		end: 36,
		type: 'italic',
		row: 2,
	}
];

export const annotationsSplitted = [
	{
		start: 6,
		end: 30,
		type: 'paragraph',
		row: 0,
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
		row: 0,
	},
	{
		_first: true,
		start: 2,
		end: 6,
		type: 'underline',
		row: 1,
	},
	{
		_segment: true,
		start: 6,
		end: 30,
		type: 'underline',
		row: 1,
	},
	{
		_segment: true,
		start: 30,
		end: 31,
		type: 'underline',
		row: 1,
	},
	{
		_last: true,
		start: 31,
		end: 39,
		type: 'underline',
		row: 1,
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
		row: 2,
	},
	{
		start: 34,
		end: 36,
		type: 'italic',
		row: 2,
	}
];

export const tree = [
	{
		_first: true,
		start: 2,
		end: 6,
		type: 'underline',
		row: 1,
	},
	{
		start: 6,
		end: 30,
		type: 'paragraph',
		row: 0,
		children: [
			{
				_segment: true,
				start: 6,
				end: 30,
				type: 'underline',
				row: 1,
				children: [
					{
						start: 8,
						end: 17,
						type: 'bold',
						row: 2,
					},
				]
			},
		]
	},
	{
		_segment: true,
		start: 30,
		end: 31,
		type: 'underline',
		row: 1,
	},
	{
		start: 31,
		end: 72,
		type: 'paragraph',
		row: 0,
		children: [
			{
				_last: true,
				start: 31,
				end: 39,
				type: 'underline',
				row: 1,
				children: [
					{
						start: 34,
						end: 36,
						type: 'italic',
						row: 2,
					}
				]
			},
		]
	},
];
