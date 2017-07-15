import {IDocument} from "../document";
const original: IDocument = ({
	tree: null,
	id: 'original',
	annotations: [
		{
			id: 1,
			type: 'paragraph',
			start: 6,
			end: 29,
		},
		{
			id: 2,
			type: 'paragraph',
			start: 31,
			end: 71,
		},
		{
			id: 3,
			type: 'bold',
			start: 8,
			end: 16,
		},
		{
			id: 4,
			type: 'underline',
			start: 23,
			end: 38,
		},
		{
			id: 5,
			type: 'italic',
			start: 34,
			end: 35,
		}
	],
	text: "Hunger, endurance, and horror. Swabbies wave from strengths like stormy furners."
});

export default original;
