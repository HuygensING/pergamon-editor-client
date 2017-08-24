import * as uuidv4 from 'uuid/v4';
import {activateAnnotation, deactivateAnnotation} from "./root";

export const getAnnotationAnnotations = (annotationId) => async (dispatch, getState) => {
	const response = await fetch(`/api/annotations/${annotationId}/annotations`);
	const annotations = await response.json();

	dispatch({
		type: 'DOCUMENTS_UPDATE_ANNOTATION',
		documentId: getState().root.rootDocumentId,
		annotationId,
		props: {
			annotations,
		}
	})
};

export const getAnnotation = async (id: string) => {
	const response = await fetch(`/api/annotations/${id}`);
	return await response.json();
};

export const createAnnotation = (ev) => async (dispatch, getState) => {
	const { selectionStart, selectionEnd } = ev.currentTarget;
	if (selectionEnd - selectionStart === 0) return;

	const documentId = getState().root.activeDocumentId;

	const response = await fetch(`/api/documents/${documentId}/annotations`, {
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			end: selectionEnd,
			source: 'user',
			start: selectionStart,
			target: documentId,
			type: 'note',
		}),
		method: 'POST',
	});

	const annotation = await response.json();

	dispatch({
		annotationId: annotation.id,
		annotationType: 'note',
		documentId,
		end: selectionEnd,
		start: selectionStart,
		type: 'DOCUMENTS_CREATE_ANNOTATION',
	});

	dispatch(activateAnnotation(annotation.id));
};

export const updateAnnotation = (props) => (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		annotationId: root.activeAnnotationId,
		documentId: root.activeDocumentId,
		props,
		type: 'DOCUMENTS_UPDATE_ANNOTATION',
	});
};

export const updateAnnotationDocumentText =
	(text: string, ev: any, documentId: string) =>
		(dispatch, getState) =>
			dispatch({
				documentId: documentId,
				text,
				type: 'DOCUMENTS_UPDATE_ANNOTATION_DOCUMENT_TEXT',
			});

export const deleteAnnotation = () => (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		annotationId: root.activeAnnotationId,
		documentId: root.activeDocumentId,
		type: 'DOCUMENTS_DELETE_ANNOTATION',
	});

	dispatch(deactivateAnnotation());
};

export const createAnnotationDocument = () => async (dispatch, getState) => {
	const root = getState().root;
	const id = uuidv4();

	const response = await fetch(`/api/documents/${id}`, {
		method: 'PUT',
	});

	dispatch({
		documentId: id,
		type: 'DOCUMENTS_CREATE_DOCUMENT',
	});

	if (response.status === 201) {
		const xhr2 = await fetch(`/api/annotations/${root.activeAnnotationId}/body`, {
			method: 'PUT',
			body: id,
		});

		dispatch(updateAnnotation({ body: id }));
	}



	// const documentId = `some-id-${Math.floor(Math.random() * 10000)}`;
	//
	// dispatch({
	// 	documentId,
	// 	type: 'DOCUMENTS_CREATE_DOCUMENT',
	// });
	//
	// dispatch(updateAnnotation({ documentId }));
};
