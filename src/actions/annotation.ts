export const cancelAnnotation = () => (dispatch) =>
	dispatch({ type: 'CANCEL_ANNOTATION'});

export const removeNewAnnotation = () => (dispatch) =>
	dispatch({ type: 'REMOVE_NEW_ANNOTATION'});

export const createAnnotation = (ev) => (dispatch, getState) => {
	const { selectionStart, selectionEnd, value } = ev.currentTarget;
	if (selectionEnd - selectionStart === 0) return;

	dispatch({
		type: 'CREATE_ANNOTATION',
		annotation_type: 'highlight',
		start: selectionStart,
		end: selectionEnd,
	});

	dispatch({
		type: 'ADD_ANNOTATION',
		annotation: getState().annotation,
	});
};

export const activateAnnotation = (id) => (dispatch, getState) => {
	const annotation = getState().doc.annotations.find((a) => a.id === id);
	console.log(annotation)
	dispatch({
		type: 'ACTIVATE_ANNOTATION',
		id,
		start: annotation.start,
		end: annotation.end,
	});
};
