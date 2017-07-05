export const annotations = [
	{
		start: 0,
		end: 19,
	},
	{
		start: 0,
		end: 3,
	},
	{
		start: 2,
		end: 9,
	},
	{
		start: 3,
		end: 4,
	},
	{
		start: 8,
		end: 11,
	},
	{
		start: 16,
		end: 19,
	}
];

export const annotationsWithRow = [
	{
		start: 0,
		end: 19,
		row: 0,
	},
	{
		start: 0,
		end: 3,
		row: 1,
	},
	{
		start: 2,
		end: 9,
		row: 2,
	},
	{
		start: 3,
		end: 4,
		row: 3,
	},
	{
		start: 8,
		end: 11,
		row: 1,
	},
	{
		start: 16,
		end: 19,
		row: 1,
	}
];

export const annotationsSortedByRow = [
	{
		start: 0,
		end: 19,
		row: 0,
	},
	{
		start: 0,
		end: 3,
		row: 1,
	},
	{
		start: 8,
		end: 11,
		row: 1,
	},
	{
		start: 16,
		end: 19,
		row: 1,
	},
	{
		start: 2,
		end: 9,
		row: 2,
	},
	{
		start: 3,
		end: 4,
		row: 3,
	},
];

export const annotationsSplitted = [
	{
		start: 0,
		end: 19,
	},
	{
		start: 0,
		end: 3,
	},
	{
		start: 8,
		end: 11,
	},
	{
		start: 16,
		end: 19,
	},
	{
		start: 2,
		end: 3,
	},
	{
		start: 4,
		end: 7,
	},
	{
		start: 8,
		end: 9,
	},
	{
		start: 3,
		end: 3,
	},
	{
		start: 4,
		end: 4,
	},
];

export const tree = [
	{
		start: 0,
		end: 19,
		children: [
			{
				start: 0,
				end: 3,
				children: [
					{
						start: 2,
						end: 3,
						children: [
							{
								start: 3,
								end: 3,
							},
						]
					}
				]
			},
			{
				start: 4,
				end: 7,
				children: [
					{
						start: 4,
						end: 4,
					}
				]
			},
			{
				start: 8,
				end: 11,
				children: [
					{
						start: 8,
						end: 9,
					},
				]
			},
			{
				start: 16,
				end: 19,
			},
		],
	},
];
const expected = [
	{
		start: 0,
		end: 19,
		children: [
			{
				start: 0,
				end: 3,
				children: [
					{
						start: 2,
						end: 3,
						children: [
							{
								start: 3,
								end: 3,
							},
						]
					}
				]
			},
			{
				start: 4,
				end: 7,
				children: [
					{
						start: 4,
						end: 4,
					}
				]
			},
			{
				start: 8,
				end: 11,
				children: [
					{
						start: 8,
						end: 9,
					},
				]
			},
			{
				start: 16,
				end: 19,
			},
		],
	},
];
