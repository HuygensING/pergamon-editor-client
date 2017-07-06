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

	// const selection = window.getSelection();
	//
	// console.log('s', selection, selection.isCollapsed);
	//
	// // If the selection has no length, an annotation cannot be made.
	// // if (selection.isCollapsed) return;
	//
	// // A new selection has been made. Remove the old selection/range.
	// // if (getState().annotation.start != null) removeNewAnnotation()(dispatch);
	//
	// // Extract the range from the selection.
	// const range = selection.getRangeAt(0);
	// console.log(range);

	// selection.empty();
};

