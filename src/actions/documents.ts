export const updateDocument = (document) => (dispatch, getState) =>
	dispatch({
		type: 'DOCUMENTS_UPDATE',
		document,
	});
