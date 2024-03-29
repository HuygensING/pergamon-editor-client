import {IDocument} from "../src/reducers/documents";

const original: IDocument = ({
	tree: null,
	id: 'original',
	annotations: [
		{
			target: 'original',
			_targetType: 'document',
			id: 1,
			type: 'paragraph',
			start: 6,
			end: 30,
		},
		{
			target: 'original',
			_targetType: 'document',
			id: 2,
			type: 'paragraph',
			start: 31,
			end: 72,
		},
		{
			target: 'original',
			_targetType: 'document',
			id: 3,
			type: 'bold',
			start: 8,
			end: 17,
		},
		{
			target: 'original',
			_targetType: 'document',
			id: 4,
			type: 'underline',
			start: 23,
			end: 39,
		},
		{
			target: 'original',
			_targetType: 'document',
			id: 5,
			type: 'italic',
			start: 34,
			end: 36,
		}
	],
	text: "Hunger, endurance, and horror. Swabbies wave from strengths like stormy furners."
});

export default original;
