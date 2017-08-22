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
