import debounce = require('lodash.debounce');
import {debounceWait} from "../constants";
import {addMessage} from 'hire-messages';
import {deactivateAnnotation} from "./annotation";

export const setRootDocumentId = (id) => async (dispatch, getState) => {
	await dispatch(activateDocument(id));
	dispatch({
		type: 'SET_ROOT_DOCUMENT',
		id,
	});
};

export const activateDocument = (id) => async (dispatch, getState) => {
	await dispatch(deactivateAnnotation());
	await dispatch(addDocument(id));

	dispatch({
		type: 'ACTIVATE_DOCUMENT',
		id,
	});
};

export const addDocument = (id) => async (dispatch, getState) => {
	const documents = getState().documents.all;

	if (documents.find(d => d.id === id) == null) {
		const response = await fetch(`/api/documents/${id}`);
		const doc = await response.json();
		doc.id = id;

		if (response.status === 200) {
			addMessage({
				type: 'success',
				value: `Document ${doc.id} received`,
			});
		} else {
			addMessage({
				type: 'error',
				value: response.statusText,
			});
		}

		dispatch({
			type: 'DOCUMENTS_ADD',
			document: doc,
		});
	}
};

const replayTextEvents = (text, dispatch, getState) => {
	dispatch({
		documentId: getState().documents.active.id,
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
		documentId: getState().documents.active.id,
		keyCode: keyCode,
		type: 'DOCUMENTS_UPDATE_TEXT',
	});
};
