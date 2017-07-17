export const createAnnotation = (ev) => (dispatch, getState) => {
	const { selectionStart, selectionEnd } = ev.currentTarget;
	if (selectionEnd - selectionStart === 0) return;

	dispatch({
		type: 'ANNOTATION_CREATE',
		annotation_type: 'text',
		start: selectionStart,
		end: selectionEnd - 1,
	});

	dispatch({
		type: 'DOCUMENT_ADD_ANNOTATION',
		annotation: getState().annotation,
	});
};

export const documentUpdateAnnotation = () => (dispatch, getState) =>
	dispatch({
		type: 'DOCUMENT_UPDATE_ANNOTATION',
		annotation: getState().annotation,
	});

export const clearAnnotation = () => async (dispatch, getState) => {
	await dispatch(documentUpdateAnnotation());
	dispatch({ type: 'ANNOTATION_CLEAR' });
};


export const activateAnnotation = (id) => async (dispatch, getState) => {
	const prevAnnotation = getState().annotation;
	const annotation = getState().document.annotations.find((a) => a.id === id);
	console.log(prevAnnotation.id === annotation.id)
	if (prevAnnotation.id !== annotation.id) {
		dispatch({
			type: 'ANNOTATION_ACTIVATE',
			annotation,
		});
	} else {
		dispatch(clearAnnotation());
	}
};

export const changeAnnotationProps = (props) => async (dispatch, getState) => {
	dispatch({
		type: 'ANNOTATION_CHANGE_PROPS',
		props,
	});

	await dispatch(documentUpdateAnnotation());
};

export const deleteAnnotation = (annotationId) => (dispatch, getState) => {
	dispatch({
		type: 'ANNOTATION_DELETE',
		annotationId,
	});

	dispatch({ type: 'ANNOTATION_CLEAR' });
};