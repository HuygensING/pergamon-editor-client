// export const cancelAnnotation = () => (dispatch) =>
// 	dispatch({ type: 'CANCEL_ANNOTATION'});
//
// export const removeNewAnnotation = () => (dispatch) =>
// 	dispatch({ type: 'REMOVE_NEW_ANNOTATION'});

export const createAnnotation = (ev) => (dispatch, getState) => {
	const { selectionStart, selectionEnd } = ev.currentTarget;
	if (selectionEnd - selectionStart === 0) return;

	dispatch({
		type: 'CREATE_ANNOTATION',
		annotation_type: 'text',
		start: selectionStart,
		end: selectionEnd - 1,
	});

	dispatch({
		type: 'ADD_ANNOTATION',
		annotation: getState().annotation,
	});
};

export const activateAnnotation = (id) => (dispatch, getState) => {
	const prevAnnotation = getState().annotation;
	const annotation = getState().doc.active.annotations.find((a) => a.id === id);
	const isAlreadyActive = prevAnnotation.id === annotation.id;
	dispatch({
		type: 'ACTIVATE_ANNOTATION',
		annotation: isAlreadyActive ? null : {...annotation},
	});
};

export const changeAnnotationProps = (props) => (dispatch, getState) => {
	dispatch({
		type: 'CHANGE_ANNOTATION_PROPS',
		props,
	});

	dispatch({
		type: 'REPLACE_ANNOTATION',
		annotation: getState().annotation,
	})
};

export const deleteAnnotation = (annotationId) => (dispatch, getState) => {
	dispatch({
		type: 'DELETE_ANNOTATION',
		annotationId,
	});

	dispatch({ type: 'CLEAR_ANNOTATION' });
};