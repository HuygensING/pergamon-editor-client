export default (state: string[] = [], action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENT_IDS_RECEIVE': {
			nextState = action.documentIds;
			break;
		}

		default:
	}

	return nextState;
};
