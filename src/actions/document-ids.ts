import { addMessage } from 'hire-messages';

export const getDocumentIds = (force?: boolean) => async (dispatch, getState) => {
	const documentIds = getState().documentIds;
	if (!force && documentIds.length > 0) return;

	const xhr = await fetch(`/api/documents`);
	const data = await xhr.json();

	if (xhr.status === 200) {
		addMessage({
			type: 'success',
			value: 'Document IDs received',
		});
	} else {
		addMessage({
			type: 'error',
			value: xhr.statusText,
		});
	}

	dispatch({
		documentIds: data.result,
		type: 'DOCUMENT_IDS_RECEIVE',
	});
};
