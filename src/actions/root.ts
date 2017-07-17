export const deactivateAnnotation = () => async (dispatch, getState) => {
	dispatch({
		id: null,
		type: 'ROOT_SET_ACTIVE_ANNOTATION_ID',
	});
};


export const activateAnnotation = (id) => async (dispatch, getState) => {
	if (getState().active_annotation_id !== id) {
		dispatch({
			id,
			type: 'ROOT_SET_ACTIVE_ANNOTATION_ID',
		});
	} else {
		dispatch(deactivateAnnotation());
	}
};

export const setRootId = (id) => (dispatch, getState) => {
	dispatch({
		type: 'ROOT_SET_ROOT_DOCUMENT_ID',
		id,
	});

	dispatch({
		type: 'ROOT_SET_ACTIVE_DOCUMENT_ID',
		id,
	});
};
