export const deactivateAnnotation = () => async (dispatch, getState) => {
	dispatch({
		type: 'DEACTIVATE_ANNOTATION',
	});
};


export const activateAnnotation = (id) => async (dispatch, getState) => {
	if (getState().root.active_annotation_id !== id) {
		dispatch({
			id,
			type: 'ACTIVATE_ANNOTATION',
		});
	} else {
		dispatch(deactivateAnnotation());
	}
};

export const activateDocument = (id) => async (dispatch, getState) => {
	await dispatch(deactivateAnnotation());

	dispatch({
		type: 'ACTIVATE_DOCUMENT',
		id,
	});
};

export const setRootId = (id) => (dispatch, getState) => {
	dispatch({
		type: 'SET_ROOT_DOCUMENT_ID',
		id,
	});

	dispatch(activateDocument(id));
};
