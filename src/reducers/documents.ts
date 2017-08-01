import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';
import {updateProp, updatePropInArray} from "./utils";
import {getTree} from "./tree";

export interface IAnnotation {
	// If the annotation is splitted, is it the first segment?
	_first?: boolean;

	// If the annotation is splitted, is it the last segment?
	_last?: boolean;

	// If the annotation is splitted, is it not the first and not the last?
	// Ie. somewhere in between.
	_segment?: boolean;

	// Type and id of the target (parent)
	_targetId?: string;
	_targetType?: 'annotation' | 'document';

	attributes?: any;
	children?: IAnnotation[],
	documentId?: string,
	end: number,
	id?: number | string;
	start: number,
	type: string;
}

export interface IDocument {
	_activeNoteId?: string,
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

export const initialState: IDocument[] = [];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENTS_ADD': {
			nextState = nextState.concat(action.document);
			break;
		}

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

		case 'ACTIVATE_NOTE': {
			// Set the annotation id (note id) on the
			// target document (parent of note)
			nextState = updatePropInArray(
				nextState,
				action.target.id,
				(doc) => ({ _activeNoteId: action.annotation.id }),
			);

			if (action.annotationDocument != null) {
				// Calc the tree of the annotation document (the note body)
				// if the tree is not calculated yet.
				nextState = updatePropInArray(
					nextState,
					action.annotationDocument.id,
					(doc) =>
						(doc.tree == null) ?
							{ tree: getTree(doc.id, doc.text, doc.annotations) } :
							null
				);
			}

			break;
		}

		case 'DEACTIVATE_NOTE': {
			nextState = updatePropInArray(
				nextState,
				action.documentId,
				(doc) => ({ _activeNoteId: null }),
			);

			break;
		}

		case 'DOCUMENTS_REPLAY_TEXT_EVENTS': {
			nextState = updatePropInArray(nextState, action.documentId, (doc) => {
				const annotations = doc.annotations.map((a) => {
					action.events.map(e => {
						// Backspace
						if (e.keyCode === 8 || e.keyCode === 46) {
							if (a.start > e.caretPosition) {
								a.start = a.start - 1;
							}
							if (a.end >= e.caretPosition) {
								a.end = a.end - 1;
							}
						} else  {
							if (a.start >= e.caretPosition - 1) {
								a.start = a.start + 1;
							}
							if (a.end >= e.caretPosition - 1) {
								a.end = a.end + 1;
							}
						}
					});

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

		case 'DOCUMENTS_UPDATE_ANNOTATION_DOCUMENT_TEXT': {
			nextState = updatePropInArray(nextState, action.documentId, (doc) => ({
				text: action.text,
				tree: getTree(doc.id, action.text, doc.annotations),
			}));

			break;
		}

		case 'DOCUMENTS_CREATE_ANNOTATION': {
			nextState = updatePropInArray(nextState, action.documentId, (doc: IDocument) => {
				const annotations = doc.annotations.concat({
					_targetId: action.documentId,
					_targetType: 'document',
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
