import {updateProp} from "./utils";

const initialState = {
	active_annotation_id: null,
	active_document_id: null,
	root_document_id: null,
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'ROOT_SET_ROOT_DOCUMENT_ID': {
			nextState = updateProp(nextState, {
				active_document_id: action.id,
				root_document_id: action.id,
			});
			break;
		}

		case 'ROOT_SET_ACTIVE_DOCUMENT_ID': {
			nextState = updateProp(nextState, {
				active_document_id: action.id
			});
			break;
		}

		case 'ROOT_SET_ACTIVE_ANNOTATION_ID': {
			nextState = updateProp(nextState, {
				active_annotation_id: action.id
			});
			break;
		}

		default:
	}

	return nextState;
};
