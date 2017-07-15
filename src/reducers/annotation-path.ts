const initialState = [];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'ACTIVATE_CHILD_DOCUMENT': {
			nextState = nextState.concat(action.annotationId);
			break;
		}

		default:
	}

	return nextState;
};
