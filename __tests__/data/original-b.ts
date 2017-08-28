// The original test data, but the first paragraph overlaps
// the second (by just one codepoint).

export const annotations = [
	{
		start: 6,
		end: 32,
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
		end: 32,
		row: 0,
		type: 'paragraph',
	},
	{
		start: 31,
		end: 72,
		row: 1,
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
		row: 2,
		type: 'underline',
	},
	{
		start: 34,
		end: 36,
		row: 3,
		type: 'italic',
	}
];

export const annotationsSplitted = [
	{
		start: 6,
		end: 32,
		type: 'paragraph',
	},
	{
		_first: true,
		start: 31,
		end: 32,
		type: 'paragraph',
	},
	{
		_last: true,
		start: 32,
		end: 72,
		type: 'paragraph',
	},
	{
		start: 8,
		end: 17,
		type: 'bold',
	},
	{
		_first: true,
		start: 23,
		end: 31,
		type: 'underline',
	},
	{
		_segment: true,
		start: 31,
		end: 32,
		type: 'underline',
	},
	{
		_last: true,
		start: 32,
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
		end: 32,
		type: 'paragraph',
		children: [
			{
				_first: true,
				start: 31,
				end: 32,
				type: 'paragraph',
				children: [
					{
						_segment: true,
						start: 31,
						end: 32,
						type: 'underline',
					}
				]
			},
			{
				start: 8,
				end: 17,
				type: 'bold',
			},
			{
				_first: true,
				start: 23,
				end: 31,
				type: 'underline',
			},
		]
	},
	{
		_last: true,
		start: 32,
		end: 72,
		type: 'paragraph',
		children: [
			{
				_last: true,
				start: 32,
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
