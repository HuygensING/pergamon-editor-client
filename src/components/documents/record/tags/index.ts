import styled from 'styled-components'
import Note from "./note";
import {InlineDiv} from "./base";

const Div = styled.div``;
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

	"tag:TEI": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:teiHeader": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:meta": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:text": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:body": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:div": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:head": {
		component: styled.h2``,
		display: 'inline',
	},
	"tag:ref": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:p": {
		component: Paragraph,
		display: 'inline',
	},
	"tag:pb": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:placeName": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:persName": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:rs": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:geogName": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:name": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:lb": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:seg": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:note": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:hi": {
		component: Highlight,
		display: 'inline',
	},
	"tag:sup": {
		component: styled.sup``,
		display: 'inline',
	},
	"tag:graphic": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:figure": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:table": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:row": {
		component: InlineDiv,
		display: 'inline',
	},
	"tag:cell": {
		component: InlineDiv,
		display: 'inline',
	},
};
