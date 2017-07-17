import {activateAnnotation, deactivateAnnotation} from "./root";

export const updateText = (text, ev, documentId?) => (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		caretPosition: ev.currentTarget.selectionStart,
		documentId: documentId || getState().root.active_document_id,
		text,
		type: 'DOCUMENTS_UPDATE_TEXT',
	});
};

export const createAnnotation = (ev) => (dispatch, getState) => {
	const { selectionStart, selectionEnd } = ev.currentTarget;
	if (selectionEnd - selectionStart === 0) return;

	const annotationId = `random-id-${Math.floor(Math.random() * 10000)}`;

	dispatch({
		annotationId,
		annotationType: 'text',
		documentId: getState().root.active_document_id,
		end: selectionEnd - 1,
		start: selectionStart,
		type: 'DOCUMENTS_CREATE_ANNOTATION',
	});

	dispatch(activateAnnotation(annotationId));
};

export const updateAnnotation = (props) => async (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		annotationId: root.active_annotation_id,
		documentId: root.active_document_id,
		props,
		type: 'DOCUMENTS_UPDATE_ANNOTATION',
	});
};

export const deleteAnnotation = () => (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		annotationId: root.active_annotation_id,
		documentId: root.active_document_id,
		type: 'DOCUMENTS_DELETE_ANNOTATION',
	});

	dispatch(deactivateAnnotation());
};

export const createAnnotationDocument = () => (dispatch, getState) => {
	const documentId = `some-id-${Math.floor(Math.random() * 10000)}`;

	dispatch({
		documentId,
		type: 'DOCUMENTS_CREATE_DOCUMENT',
	});

	dispatch(updateAnnotation({ documentId }));
};

// export const updateAnnotationDocument = (documentId, props) => (dispatch, getState) => {
// 	const root = getState().root;
// 	dispatch({
// 		annotationId: root.active_annotation_id,
// 		documentId,
// 		props,
// 		type: 'DOCUMENTS_UPDATE_DOCUMENT',
// 	});
// };