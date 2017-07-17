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
			type: 'ROOT_SET',
			document: getState().document,
		});
	}
};

export const setDocumentText = (text, ev) => (dispatch, getState) =>
	dispatch({
		type: 'DOCUMENT_SET_TEXT',
		caretPosition: ev.currentTarget.selectionStart,
		text,
	});
