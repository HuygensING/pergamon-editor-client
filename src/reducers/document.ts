import * as md5 from 'md5';
import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';
import {addRow, byDisplayStartEnd, byRowStartEnd} from "../components/doc/utils";
import {splitAnnotations} from "../components/doc/split-annotations";
import toTree from "../components/doc/create-tree";
import {IAnnotation} from "./annotation";

const createTree = (text: string, annotations: IAnnotation[]): IAnnotation =>
	({
		start: 0,
		end: text.length - 1,
		id: 'some-random-tree-id',
		type: 'doc',
		children: annotations
			.sort(byDisplayStartEnd)
			.map(addRow())
			.sort(byRowStartEnd)
			.reduce(splitAnnotations(), [])
			.map(addRow())
			.sort(byRowStartEnd)
			.reduce(toTree, []),
	});

const treeCache = {};
const getTree = (id: string, text: string, annotations: IAnnotation[]): IAnnotation => {
	const annotationString = JSON.stringify(annotations);
	const hash = md5(`${id}|||${text}|||${annotationString}`);
	if (treeCache.hasOwnProperty(hash)) {
		return treeCache[hash];
	}	else {
		const clone = JSON.parse(annotationString);
		const tree = createTree(text, clone);
		treeCache[hash] = tree;
		return tree;
	}
};

export interface IDocument {
	id: string;
	annotations: IAnnotation[],
	text: string;
	tree: IAnnotation,
}


export const defaultDocument: IDocument = {
	id: null,
	annotations: [],
	text: '',
	tree: null,
};

interface IState {
	active: IDocument;
	all: IDocument[];
}

export const initialState: IState = {
	active: defaultDocument,
	all: [original, typical, large],
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'SET_DOC_ID': {
			const nextDocument = nextState.all.find((d) => d.id === action.id);

			if (nextDocument.tree == null) {
				nextDocument.tree = getTree(action.id, nextDocument.text, nextDocument.annotations);
			}

			nextState = { ...nextState, ...{ active: nextDocument }};

			break;
		}

		case 'SET_DOC_TEXT': {
			const { id, annotations } = nextState.active;
			const nextDocument = {
				...nextState.active,
				...{
					annotations: annotations.map((a) => {
						if (a.start > action.caretPosition) {
							a.start = a.start + 1;
						}
						if (a.end > action.caretPosition) {
							a.end = a.end + 1;
						}

						return a;
					}),
					text: action.text,
					tree: getTree(id, action.text, annotations),
				}
			};

			nextState = { ...nextState, ...{ active: nextDocument }};

			break;
		}

		case 'SET_DOC_ANNOTATIONS': {
			const { id, text } = nextState.active;
			const nextDocument = {
				...nextState.active,
				...{
					annotations: action.annotations,
					tree: getTree(id, text, action.annotations),
				}
			};

			nextState = { ...nextState, ...{ active: nextDocument }};

			break;
		}

		case 'ADD_DOCUMENT': {
			const all = nextState.all.concat(action.document);
			nextState = { ...nextState, ...{ all }};

			break;
		}

		case 'ADD_ANNOTATION': {
			const { id, text } = nextState.active;
			const annotations = nextState.active.annotations.concat(action.annotation);
			const nextDocument = {
				...nextState.active,
				...{
					annotations,
					tree: getTree(id, text, annotations),
				}
			};

			nextState = { ...nextState, ...{ active: nextDocument }};

			break;
		}

		case 'REPLACE_ANNOTATION': {
			const { id, text } = nextState.active;
			const annotations = nextState.active.annotations
				.filter((a) => a.id !== action.annotation.id)
				.concat(action.annotation);

			const nextDocument = {
				...nextState.active,
				...{
					annotations,
					tree: getTree(id, text, annotations),
				},
			};

			nextState = { ...nextState, ...{ active: nextDocument }};

			break;
		}

		case 'REPLACE_ANNOTATION_DOCUMENT': {
			const all = nextState.all
				.filter((a) => a.id !== action.document.id)
				.concat(action.document);

			nextState = { ...nextState, ... { all }};

			break;
		}

		default:
	}

	return nextState;
};
