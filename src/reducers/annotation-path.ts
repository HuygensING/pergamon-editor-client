import {IAnnotation} from "./annotation";

export default (state: IAnnotation[] = [], action) => {
	let nextState = state;

	switch (action.type) {
		case 'ANNOTATION_PATH_ADD': {
			nextState = nextState.concat(action.annotation);
			break;
		}

		case 'ANNOTATION_PATH_GO_TO_INDEX': {
			nextState = nextState.slice(0, action.index + 1);
			break;
		}

		default:
	}

	return nextState;
};
