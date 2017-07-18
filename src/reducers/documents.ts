import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';
import {updateProp, updatePropInArray} from "./utils";
import {getTree} from "./tree";

export interface IAnnotation {
	attributes?: any;
	children?: IAnnotation[],
	documentId?: string,
	end: number,
	id?: number | string;
	start: number,
	type: string;
}

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

export const initialState: IDocument[] = [
	original,
	typical,
	large
];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENTS_CREATE_DOCUMENT': {
			const newDocument = updateProp(defaultDocument, {
				 id: action.documentId,
			});

			nextState = nextState.concat(newDocument);

			break;
		}

		case 'ACTIVATE_DOCUMENT': {
			nextState = updatePropInArray(nextState, action.id, (doc) =>
				(doc.tree == null) ?
					{ tree: getTree(doc.id, doc.text, doc.annotations) } :
					null
			);
			break;
		}

		case 'DOCUMENTS_UPDATE_TEXT': {
			nextState = updatePropInArray(nextState, action.documentId, (doc) => {
				const annotations = doc.annotations.map((a) => {
					if (a.start > action.caretPosition) {
						a.start = a.start + 1;
					}
					if (a.end > action.caretPosition) {
						a.end = a.end + 1;
					}

					return a;
				});

				return {
					annotations,
					text: action.text,
					tree: getTree(doc.id, action.text, annotations),
				};
			});

			break;
		}

		case 'DOCUMENTS_CREATE_ANNOTATION': {
			nextState = updatePropInArray(nextState, action.documentId, (doc: IDocument) => {
				const annotations = doc.annotations.concat({
					id: action.annotationId,
					start: action.start,
					end: action.end,
					type: action.annotationType,
				});

				return {
					annotations,
					tree: getTree(action.id, doc.text, annotations),
				};
			});

			break;
		}

		case 'DOCUMENTS_UPDATE_ANNOTATION': {
			nextState = updatePropInArray(nextState, action.documentId, (doc: IDocument) => {
				const annotations = doc.annotations.map(a =>
					(a.id === action.annotationId) ?
						updateProp(a, action.props)	:
						a
				);

				return {
					annotations,
					tree: getTree(action.id, doc.text, annotations),
				};
			});

			break;
		}

		case 'DOCUMENTS_DELETE_ANNOTATION': {
			nextState = updatePropInArray(nextState, action.documentId, (doc: IDocument) => {
				const annotations = doc.annotations.filter(a =>
					(a.id !== action.annotationId)
				);

				return {
					annotations,
					tree: getTree(action.id, doc.text, annotations),
				};
			});

			break;
		}

		default:
	}

	return nextState;
};
