export const getDocumentIds = () => async (dispatch, getState) => {
	const result = await fetch(`/api/documents`);
	const documentIds = await result.json();

	dispatch({
		documentIds,
		type: 'DOCUMENT_IDS_RECEIVE',
	});
};
