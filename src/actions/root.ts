import {IAnnotation} from "../reducers/documents";

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
			const documents = getState().documents.all;
			const target = documents.find(d => d.id === annotation.target);

			if (target._activeNoteId !== annotation.id) {
				const annotationDocument = documents.find(d => d.id === annotation.body);

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
