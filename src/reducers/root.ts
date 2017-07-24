import {updateProp} from "./utils";

const initialState = {
	active_annotation_id: null,
	active_document_id: null,
	root_document_id: null,
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'SET_ROOT_DOCUMENT_ID': {
			nextState = updateProp(nextState, {
				root_document_id: action.id,
			});
			break;
		}

		case 'ACTIVATE_DOCUMENT': {
			nextState = updateProp(nextState, {
				active_document_id: action.id,
			});
			break;
		}

		case 'ACTIVATE_ANNOTATION': {
			nextState = updateProp(nextState, {
				active_annotation_id: action.id,
			});
			break;
		}

		case 'DEACTIVATE_ANNOTATION': {
			nextState = updateProp(nextState, {
				active_annotation_id: null,
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
