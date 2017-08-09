export const getDocumentIds = () => async (dispatch, getState) => {
	const fetched = await fetch(`/api/documents`);
	const data = await fetched.json();

	dispatch({
		documentIds: data.result,
		type: 'DOCUMENT_IDS_RECEIVE',
	});
};
