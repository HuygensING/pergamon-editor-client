import {replaceItemInArray, updateProp, updatePropInArray} from "./utils/index";
import {getTree} from "./utils/get-tree";

export type SourceType = 'system' | 'xml' | 'user';
export interface IAnnotation {
	// If the annotation is splitted, is it the first segment?
	_first?: boolean;

	// If the annotation is splitted, is it the last segment?
	_last?: boolean;

	// If the annotation is splitted, is it not the first and not the last?
	// Ie. somewhere in between.
	_segment?: boolean;

	_tagId?: string;

	// Type and id of the target (parent)
	// _targetId?: string;
	// TODO remove?
	_targetType?: 'annotation' | 'document';

	annotations?: IAnnotation[];
	attributes?: any;
	children?: IAnnotation[];
	body?: string;
	end: number;
	id?: number | string;
	source: SourceType;
	start: number;
	target: string;
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

interface IState {
	active: IDocument;
	all: IDocument[];
	root: IDocument;
}
export const initialState: IState = {
	active: null,
	all: [],
	root: null,
};

export default (state = initialState, action) => {
	let nextState = state;

	const updatePropsInDocument = (id, props) => {
		const doc = nextState.all.find(x => x.id === id);
		const nextDoc = updateProp(doc, props);
		const all = replaceItemInArray(nextState.all, nextDoc);
		const nextStateProps: Partial<IState> = { all };
		if (nextDoc.id === nextState.active.id) nextStateProps.active = nextDoc;
		return updateProp(nextState, nextStateProps);
	};

	const updatePropsInDocumentWithCallback = (id, cb) => {
		const doc = nextState.all.find(x => x.id === id);
		return updatePropsInDocument(doc.id, cb(doc));
	};

	switch (action.type) {
		case 'SET_ROOT_DOCUMENT': {
			nextState = updateProp(nextState, {
				root: nextState.all.find(d => d.id === action.id),
			});
			break;
		}

		case 'DOCUMENTS_ADD': {
			nextState = updateProp(nextState, {
				all: nextState.all.concat(action.document)
			});
			break;
		}

		case 'DOCUMENTS_CREATE_DOCUMENT': {
			const newDocument = updateProp(defaultDocument, {
				 id: action.documentId,
			});

			nextState = updateProp(nextState, {
				all: nextState.all.concat(newDocument)
			});
			break;
		}

		case 'ACTIVATE_DOCUMENT': {
			let doc = nextState.all.find(d => d.id === action.id);
			if (doc.tree == null) {
				doc = updateProp(doc, { tree: getTree(doc.id, doc.text, doc.annotations)});
			}

			nextState = updateProp(nextState, {
				all: replaceItemInArray(nextState.all, doc),
				active: doc,
			});
			break;
		}

		case 'ACTIVATE_NOTE': {
			// Set the annotation id (note id) on the
			// target document (parent of note)
			let targetDocument = updateProp(action.target, { _activeNoteId: action.annotation.id })

			let annotationDocument = action.annotationDocument;
			// Calc the tree of the annotation document (the note body)
			// if the tree is not calculated yet.
			if (action.annotationDocument != null && action.annotationDocument.tree == null) {
				annotationDocument = updateProp(nextState.active, {
					tree: getTree(
						action.annotationDocument.id,
						action.annotationDocument.text,
						action.annotationDocument.annotations
					)
				});
			}

			const all = replaceItemInArray(nextState.all, targetDocument, annotationDocument);

			nextState = updateProp(nextState, { all });
			if (targetDocument.id === nextState.active.id) {
				nextState = updateProp(nextState, { active: targetDocument });
			}

			break;
		}

		case 'DEACTIVATE_NOTE': {
			nextState = updatePropsInDocument(action.documentId, { _activeNoteId: null });
			break;
		}

		case 'DOCUMENTS_REPLAY_TEXT_EVENTS': {
			nextState = updatePropsInDocumentWithCallback(action.documentId, (doc) => {
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
			const all = updatePropInArray(nextState, action.documentId, (doc) => ({
				text: action.text,
				tree: getTree(doc.id, action.text, doc.annotations),
			}));

			nextState = updateProp(nextState, { all });

			break;
		}

		case 'CREATE_ANNOTATION': {
			const activeDocument = nextState.all.find(d => d.id === action.documentId);
			const annotations = activeDocument.annotations.concat({
				target: action.documentId,
				_targetType: 'document',
				id: action.annotationId,
				start: action.start,
				end: action.end,
				source: 'user',
				type: action.annotationType,
			});
			const active = updateProp(activeDocument, {
				annotations,
				tree: getTree(activeDocument.id, activeDocument.text, annotations),
			});
			const all = replaceItemInArray(nextState.all, active);
			nextState = updateProp(nextState, {all, active});

			break;
		}

		case 'UPDATE_ANNOTATION': {
			const activeDocument = nextState.all.find(d => d.id === action.documentId);

			const annotations = updatePropInArray(
				activeDocument.annotations,
				action.annotationId,
				(anno: IAnnotation) => action.props
			);

			const active = updateProp(activeDocument, {
				annotations,
				tree: getTree(activeDocument.id, activeDocument.text, annotations),
			});
			const all = replaceItemInArray(nextState.all, active);
			nextState = updateProp(nextState, { active, all });

			break;
		}

		case 'DELETE_ANNOTATION': {
			const all = updatePropInArray(nextState.all, action.documentId, (doc: IDocument) => {
				const annotations = doc.annotations.filter(a =>
					(a.id !== action.annotationId)
				);

				return {
					annotations,
					tree: getTree(action.id, doc.text, annotations),
				};
			});

			nextState = updateProp(nextState, { all });

			break;
		}

		default:
	}

	return nextState;
};
