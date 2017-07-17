import {updateDocument} from "./documents";

export const setDocument = (document) => async (dispatch, getState) => {
	const currentDocument = getState().document;
	if (currentDocument.id != null) {
		await dispatch(updateDocument(currentDocument));
	}

	dispatch({
		type: 'DOCUMENT_SET',
		document,
	});

};

export const setDocumentId = (id, isRoot=false) => async (dispatch, getState) => {
	const document = getState().documents.find(d => d.id === id);
	await dispatch(setDocument(document));

	if (isRoot) {
		dispatch({
			type: 'ROOT_SET_ROOT_DOCUMENT_ID',
			document: getState().document,
		});
	}
};

export const setDocumentText = (id, text, ev) => (dispatch, getState) =>
	dispatch({
		caretPosition: ev.currentTarget.selectionStart,
		id,
		text,
		type: 'DOCUMENTS_UPDATE_DOCUMENT_TEXT',
	});

export const setRootId = (id) => (dispatch, getState) =>
	dispatch({
		type: 'ROOT_SET_ROOT_DOCUMENT_ID',
		id,
	});

