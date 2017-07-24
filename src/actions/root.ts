import {IAnnotation, IDocument} from "../reducers/documents";
export const deactivateAnnotation = () => async (dispatch, getState) => {
	dispatch({ type: 'DEACTIVATE_ANNOTATION' });
};


export const activateAnnotation = (id) => async (dispatch, getState) => {
	if (getState().root.activeAnnotationId !== id) {
		dispatch({
			id,
			type: 'ACTIVATE_ANNOTATION',
		});
	} else {
		dispatch(deactivateAnnotation());
	}
};

export const activateDocument = (id) => async (dispatch, getState) => {
	await dispatch(deactivateAnnotation());

	dispatch({
		type: 'ACTIVATE_DOCUMENT',
		id,
	});
};

export const setRootId = (id) => (dispatch, getState) => {
	dispatch({
		type: 'SET_ROOT_DOCUMENT_ID',
		id,
	});

	dispatch(activateDocument(id));
};

export const deactivateNote = (documentId: string) =>
	async (dispatch, getState) => {
		dispatch({
			documentId,
			type: 'DEACTIVATE_NOTE'
		});
	};

export const activateNote =
	(annotation: IAnnotation) =>
		(dispatch, getState) => {
			const state = getState();
			const target = state.documents.find(d => d.id === annotation._targetId);

			if (target._activeNoteId !== annotation.id) {
				const annotationDocument = state.documents.find(d => d.id === annotation.documentId);

				dispatch({
					annotation, // the note
					annotationDocument, // the body of the note
					target, // the parent of the note
					type: 'ACTIVATE_NOTE',
				});
			} else {
				dispatch(deactivateNote(target.id));
			}
		};
