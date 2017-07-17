import {defaultDocument} from "./document";

export default (state = defaultDocument, action) => {
	let nextState = state;

	switch (action.type) {
		case 'ROOT_SET': {
			nextState = action.document;

			break;
		}

		default:
	}

	return nextState;
};
