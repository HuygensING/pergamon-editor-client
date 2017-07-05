export const annotations = [
	{
		start: 6,
		end: 29,
		type: 'p',
	},
	{
		start: 31,
		end: 71,
		type: 'p',
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
	},
	{
		start: 31,
		end: 71,
		row: 0,
	},
	{
		start: 8,
		end: 16,
		row: 1,
	},
	{
		start: 23,
		end: 38,
		row: 1,
	},
	{
		start: 34,
		end: 35,
		row: 2,
	}
];

export const annotationsSortedByRow = [
	{
		start: 6,
		end: 29,
		row: 0,
	},
	{
		start: 31,
		end: 71,
		row: 0,
	},
	{
		start: 8,
		end: 16,
		row: 1,
	},
	{
		start: 23,
		end: 38,
		row: 1,
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
	},
	{
		start: 31,
		end: 71,
	},
	{
		start: 8,
		end: 16,
	},
	{
		start: 23,
		end: 29,
	},
	{
		start: 30,
		end: 30,
	},
	{
		start: 31,
		end: 38,
	},
	{
		start: 34,
		end: 35,
	}
];

export const tree = [
	{
		start: 6,
		end: 29,
		children: [
			{
				start: 8,
				end: 16,
			},
			{
				start: 23,
				end: 29,
			},
		]
	},
	{
		start: 30,
		end: 30,
	},
	{
		start: 31,
		end: 71,
		children: [
			{
				start: 31,
				end: 38,
				children: [
					{
						start: 34,
						end: 35,
					}
				]
			},
		]
	},
];
