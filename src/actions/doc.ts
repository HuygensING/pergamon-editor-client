export const setDocId = (id) => (dispatch, getState) => {
	dispatch({
		type: 'SET_DOC_ID',
		id,
	})
};

export const setDocText = (text) => (dispatch, getState) => {
	dispatch({
		type: 'SET_DOC_TEXT',
		text,
	})
};

export const setDocAnnotations = (annotations) => (dispatch, getState) => {
	dispatch({
		type: 'SET_DOC_ANNOTATIONS',
		annotations,
	})
};
