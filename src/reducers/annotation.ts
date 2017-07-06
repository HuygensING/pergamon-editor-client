export interface IAnnotation {
	children?: IAnnotation[],
	end: number,
	id: number | string;
	start: number,
	type: string;
}

const initialState: IAnnotation = {
	end: null,
	id: null,
	start: null,
	type: null,
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'CREATE_ANNOTATION': {
			nextState = initialState;
			nextState = { ...nextState, ...{
				start: action.start,
				end: action.end,
				type: action.annotation_type,
			}};
			break;
		}

		case 'REMOVE_NEW_ANNOTATION': {
			break;
		}

		case 'CANCEL_ANNOTATION': {
			nextState = initialState;
			break;
		}

		default:
	}

	return nextState;
};
