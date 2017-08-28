import {updateProp} from "./utils/index";

interface IState {
	activeAnnotationId: string;
	activeDocumentId: string;
	rootDocumentId: string;
}

const initialState: IState = {
	activeAnnotationId: null,
	activeDocumentId: null,
	rootDocumentId: null,
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		// case 'SET_ROOT_DOCUMENT_ID': {
		// 	nextState = updateProp(nextState, {
		// 		rootDocumentId: action.id,
		// 	});
		// 	break;
		// }
		//
		// case 'ACTIVATE_DOCUMENT': {
		// 	nextState = updateProp(nextState, {
		// 		activeDocumentId: action.id,
		// 	});
		// 	break;
		// }
		//
		case 'ACTIVATE_ANNOTATION': {
			nextState = updateProp(nextState, {
				activeAnnotationId: action.id,
			});
			break;
		}

		case 'DEACTIVATE_ANNOTATION': {
			nextState = updateProp(nextState, {
				activeAnnotationId: null,
			});
			break;
		}

		case 'ACTIVATE_NOTE': {
			nextState = updateProp(nextState, {
				activeNoteId: action.id,
			});
			break;
		}

		case 'DEACTIVATE_NOTE': {
			nextState = updateProp(nextState, {
				activeNoteId: null,
			});
			break;
		}

		default:
	}

	return nextState;
};
