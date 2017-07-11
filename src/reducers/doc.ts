import * as md5 from 'md5';
import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';
import {addRow, byDisplayStartEnd, byRowStartEnd} from "../components/doc/utils";
import {splitAnnotations} from "../components/doc/split-annotations";
import toTree from "../components/doc/create-tree";
import {IAnnotation} from "./annotation";

const data = {
	typical,
	large,
	original,
};

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

interface IState {
	id: string;
	annotations: IAnnotation[],
	text: string;
	tree: IAnnotation,
}

const initialState: IState = {
	id: 'original',
	annotations: data.original.annotations,
	text: data.original.text,
	tree: getTree('original', data.original.text, data.original.annotations),
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'SET_DOC_ID': {
			const annotations = data[action.id].annotations;
			const text = data[action.id].text;
			nextState = { ...nextState, ...{
				id: action.id,
				annotations,
				text,
				tree: getTree(action.id, text, annotations),
			}};
			break;
		}

		case 'SET_DOC_TEXT': {
			nextState = { ...nextState, ...{
				annotations: nextState.annotations.map((a) => {
					if (a.start > action.caretPosition) {
						a.start = a.start + 1;
					}
					if (a.end > action.caretPosition) {
						a.end = a.end + 1;
					}

					return a;
				}),
				text: action.text,
				tree: getTree(nextState.id, action.text, nextState.annotations),
			}};
			break;
		}

		case 'SET_DOC_ANNOTATIONS': {
			nextState = { ...nextState, ...{
				annotations: action.annotations,
				tree: getTree(nextState.id, nextState.text, action.annotations),
			}};
			break;
		}

		case 'ADD_ANNOTATION': {
			const annotations = nextState.annotations.concat(action.annotation);
			nextState = { ...nextState, ...{
				annotations,
				tree: getTree(nextState.id, nextState.text, annotations),
			}};
			break;
		}

		case 'REPLACE_ANNOTATION': {
			const annotations = nextState.annotations
				.filter((a) => a.id !== action.annotation.id)
				.concat(action.annotation);

			nextState = { ...nextState, ...{
				annotations,
				tree: getTree(nextState.id, nextState.text, annotations),
			}};
			break;
		}

		default:
	}

	return nextState;
};
