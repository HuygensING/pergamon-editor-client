import styled from 'styled-components'
import Note from "./note";
import {Div, InlineDiv} from "./base";

const Doc = Div;

const Paragraph = styled.div`
	margin: 1em;
`;

const Text = InlineDiv.extend``;

const Bold = InlineDiv.extend`
	font-weight: bold;
`;

const Italic = InlineDiv.extend`
	font-style: italic;
`;

const Underline = InlineDiv.extend`
	text-decoration: underline;
`;

const Highlight = InlineDiv.extend`
	background-color: rgba(255, 255, 0, 0.8);
`;

const Del = InlineDiv.extend`
	display: none;
`;

const LineGroup = Div.extend`
	margin: 2em 0;
`;

const Line = Div.extend`
	line-height: 2em;
`;

export default {
	bold: {
		component: Bold,
		display: 'inline',
	},
	del: {
		component: Del,
		display: 'inline',
	},
	doc: {
		component: Doc,
		display: 'block',
	},
	TEI: {
		component: Doc,
		display: 'block',
	},
	teiHeader: {
		component: Del,
		display: 'block',
	},
	lg: {
		component: LineGroup,
		display: 'block',
	},
	l: {
		component: Line,
		display: 'block',
	},
	italic: {
		component: Italic,
		display: 'inline',
	},
	note: {
		component: Note,
		display: 'inline',
	},
	paragraph: {
		component: Paragraph,
		display: 'block',
	},
	para: {
		component: Paragraph,
		display: 'block',
	},
	p: {
		component: Paragraph,
		display: 'block',
	},
	text: {
		component: Text,
		display: 'inline',
	},
	underline: {
		component: Underline,
		display: 'inline',
	},
	highlight: {
		component: Highlight,
		display: 'inline',
	},
	meta: {
		component: InlineDiv,
		display: 'inline',
	},
	body: {
		component: InlineDiv,
		display: 'inline',
	},
	div: {
		component: InlineDiv,
		display: 'inline',
	},
	head: {
		component: styled.h2``,
		display: 'inline',
	},
	ref: {
		component: InlineDiv,
		display: 'inline',
	},
	pb: {
		component: InlineDiv,
		display: 'inline',
	},
	placeName: {
		component: InlineDiv,
		display: 'inline',
	},
	persName: {
		component: InlineDiv,
		display: 'inline',
	},
	rs: {
		component: InlineDiv,
		display: 'inline',
	},
	geogName: {
		component: InlineDiv,
		display: 'inline',
	},
	name: {
		component: InlineDiv,
		display: 'inline',
	},
	lb: {
		component: InlineDiv,
		display: 'inline',
	},
	seg: {
		component: InlineDiv,
		display: 'inline',
	},
	hi: {
		component: Highlight,
		display: 'inline',
	},
	sup: {
		component: styled.sup``,
		display: 'inline',
	},
	graphic: {
		component: InlineDiv,
		display: 'inline',
	},
	figure: {
		component: InlineDiv,
		display: 'inline',
	},
	table: {
		component: InlineDiv,
		display: 'inline',
	},
	row: {
		component: InlineDiv,
		display: 'inline',
	},
	cell: {
		component: InlineDiv,
		display: 'inline',
	}
};
