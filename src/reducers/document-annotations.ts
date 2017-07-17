import {IAnnotation} from "./annotation";

export const initialState: IAnnotation[] = [];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENT_ANNOTATIONS_ADD': {
			nextState = nextState.concat(action.annotation);
			break;
		}

		case 'DOCUMENT_ANNOTATIONS_UPDATE': {
			nextState = nextState
				.filter((a) => a.id !== action.id)
				.concat(action.annotation);

			break;
		}

		case 'DOCUMENT_ANNOTATIONS_DELETE': {
			nextState = nextState.filter((a) => a.id !== action.id);
			break;
		}

		default:
	}

	return nextState;
};
