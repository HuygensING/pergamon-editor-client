import styled from 'styled-components'

const InlineDiv = styled.div`
	display: inline;
`;

const Doc = styled.div`
	background: lightyellow;
	border: 2px dotted orange;
	box-sizing: border-box;
	padding: 1em;
	height: 65vh;
	overflow: auto;
`;

const Paragraph = styled.div`
	color: blue;
	background: rgba(255, 182, 193, 0.2);
	border: 2px dotted pink;
	margin: 1em;
	padding: 1em;
`;

const Text = styled(InlineDiv)`
	color: green;
`;

const Bold = styled(InlineDiv)`
	font-weight: bold;
`;

const Italic = styled(InlineDiv)`
	font-style: italic;
`;

const Underline = styled(InlineDiv)`
	text-decoration: underline;
`;

const Highlight = styled(InlineDiv)`
	background-color: rgba(255, 255, 0, 0.8);
`;

export default {
	bold: {
		component: Bold,
		display: 'inline',
	},
	doc: {
		component: Doc,
		display: 'block',
	},
	italic: {
		component: Italic,
		display: 'inline',
	},
	paragraph: {
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
		component: InlineDiv,
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
		component: InlineDiv,
		display: 'inline',
	},
	"tag:sup": {
		component: InlineDiv,
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
