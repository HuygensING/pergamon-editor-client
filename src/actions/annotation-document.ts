export const createAnnotationDocument = () => (dispatch, getState) => {
	dispatch({
		type: 'CREATE_ANNOTATION_DOCUMENT',
	});

	const nextAnnotation = getState().annotation;

	dispatch({
		type: 'REPLACE_ANNOTATION',
		annotation: nextAnnotation,
	});

	dispatch({
		type: 'ADD_DOCUMENT',
		document: nextAnnotation.document,
	});
};

export const changeAnnotationDocument = (props) => (dispatch, getState) => {
	dispatch({
		type: 'CHANGE_ANNOTATION_DOCUMENT',
		props,
	});

	dispatch({
		type: 'REPLACE_ANNOTATION',
		annotation: getState().annotation,
	})
};

export const activateChildDocument = () => (dispatch, getState) => {
	dispatch({
		type: 'REPLACE_ANNOTATION_DOCUMENT',
		document: getState().annotation.document,
	});


	dispatch({ type: 'CLEAR_ANNOTATION' });
};

