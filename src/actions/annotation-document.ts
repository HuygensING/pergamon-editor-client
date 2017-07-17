export const createAnnotationDocument = () => (dispatch, getState) => {
	// dispatch({
	// 	type: 'ANNOTATION_CREATE_DOCUMENT',
	// });
	//
	// dispatch(documentUpdateAnnotation());
	//
	// const nextAnnotation = getState().annotation;
	// dispatch({
	// 	type: 'DOCUMENTS_ADD',
	// 	document: nextAnnotation.document,
	// });
	dispatch({
		type: 'DOCUMENTS_CREATE_DOCUMENT_ANNOTATION_DOCUMENT',
	});
};

// export const changeAnnotationDocument = (props) => (dispatch, getState) => {
// 	dispatch({
// 		type: 'ANNOTATION_CHANGE_DOCUMENT_PROPS',
// 		props,
// 	});
//
// 	dispatch(documentUpdateAnnotation());
// };
