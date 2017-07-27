import {activateAnnotation, deactivateAnnotation} from "./root";
import debounce = require('lodash.debounce');
import {debounceWait} from "../constants";

const replayTextEvents = (text, dispatch, getState) => {
	dispatch({
		documentId: getState().root.activeDocumentId,
		events: getState().documentTextEvents,
		text,
		type: 'DOCUMENTS_REPLAY_TEXT_EVENTS'
	})
};
const debouncedReplayTextEvents = debounce(replayTextEvents, debounceWait);

export const updateText = (text: string, ev: any, keyCode: number) => (dispatch, getState) => {
	debouncedReplayTextEvents(text, dispatch, getState);
	dispatch({
		caretPosition: ev.currentTarget.selectionStart,
		documentId: getState().root.activeDocumentId,
		keyCode: keyCode,
		type: 'DOCUMENTS_UPDATE_TEXT',
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

export const createAnnotation = (ev) => (dispatch, getState) => {
	const { selectionStart, selectionEnd } = ev.currentTarget;
	if (selectionEnd - selectionStart === 0) return;

	const annotationId = `random-id-${Math.floor(Math.random() * 10000)}`;

	dispatch({
		annotationId,
		annotationType: 'note',
		documentId: getState().root.activeDocumentId,
		end: selectionEnd,
		start: selectionStart,
		type: 'DOCUMENTS_CREATE_ANNOTATION',
	});

	dispatch(activateAnnotation(annotationId));
};

export const updateAnnotation = (props) => async (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		annotationId: root.activeAnnotationId,
		documentId: root.activeDocumentId,
		props,
		type: 'DOCUMENTS_UPDATE_ANNOTATION',
	});
};

export const deleteAnnotation = () => (dispatch, getState) => {
	const root = getState().root;
	dispatch({
		annotationId: root.activeAnnotationId,
		documentId: root.activeDocumentId,
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