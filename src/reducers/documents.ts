import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';
import {IDocument} from "./document";
import {replaceItem, updatePropInArray} from "./utils";
import {getTree} from "./tree";

export const initialState: IDocument[] = [
	original,
	typical,
	large
];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENTS_ADD_DOCUMENT': {
			nextState = nextState.concat(action.document);

			break;
		}

		case 'DOCUMENTS_UPDATE_DOCUMENT': {
			nextState = replaceItem(nextState, action.document);

			break;
		}

		case 'ROOT_SET_ROOT_DOCUMENT_ID': {
			nextState = updatePropInArray(nextState, action.id, (doc) =>
				(doc.tree == null) ?
					{ tree: getTree(doc.id, doc.text, doc.annotations) } :
					null
			);
			break;
		}

		case 'DOCUMENTS_UPDATE_DOCUMENT_TEXT': {
			nextState = updatePropInArray(nextState, action.id, (doc) => ({
				annotations: doc.annotations.map((a) => {
					if (a.start > action.caretPosition) {
						a.start = a.start + 1;
					}
					if (a.end > action.caretPosition) {
						a.end = a.end + 1;
					}

					return a;
				}),
				text: action.text,
				tree: getTree(action.id, action.text, doc.annotations),
			}));

			break;
		}

		default:
	}

	return nextState;
};
