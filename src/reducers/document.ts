import {IAnnotation} from "./annotation";
import {getTree} from "./tree";

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

export const initialState: IDocument = defaultDocument;

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		// case 'DOCUMENT_SET': {
		// 	const { annotations, id, text, tree } = action.document;
		//
		// 	if (tree == null) {
		// 		action.document.tree = getTree(id, text, annotations);
		// 	}
		//
		// 	nextState = action.document;
		//
		// 	break;
		// }
		//
		// case 'DOCUMENT_SET_TEXT': {
		// 	const { id, annotations } = nextState;
		// 	nextState = {
		// 		...nextState,
		// 		...{
		// 			annotations: annotations.map((a) => {
		// 				if (a.start > action.caretPosition) {
		// 					a.start = a.start + 1;
		// 				}
		// 				if (a.end > action.caretPosition) {
		// 					a.end = a.end + 1;
		// 				}
		//
		// 				return a;
		// 			}),
		// 			text: action.text,
		// 			tree: getTree(id, action.text, annotations),
		// 		}
		// 	};
		//
		// 	break;
		// }
		//
		// case 'DOCUMENT_ADD_ANNOTATION': {
		// 	const { id, text } = nextState;
		// 	const annotations = nextState.annotations.concat(action.annotation);
		// 	nextState = {
		// 		...nextState,
		// 		...{
		// 			annotations,
		// 			tree: getTree(id, text, annotations),
		// 		}
		// 	};
		//
		// 	break;
		// }
		//
		// case 'ANNOTATION_DELETE': {
		// 	const { id, text } = nextState;
		//
		// 	const annotations = nextState.annotations
		// 		.filter((a) => a.id !== action.annotationId);
		//
		// 	nextState = {
		// 		...nextState,
		// 		...{
		// 			annotations,
		// 			tree: getTree(id, text, annotations),
		// 		}
		// 	};
		//
		// 	break;
		// }
		//
		// case 'DOCUMENT_UPDATE_ANNOTATION': {
		// 	const { id, text } = nextState;
		// 	const annotations = nextState.annotations
		// 		.filter((a) => a.id !== action.annotation.id)
		// 		.concat(action.annotation);
		//
		// 	nextState = {
		// 		...nextState,
		// 		...{
		// 			annotations,
		// 			tree: getTree(id, text, annotations),
		// 		},
		// 	};
		//
		// 	break;
		// }

		default:
	}

	return nextState;
};