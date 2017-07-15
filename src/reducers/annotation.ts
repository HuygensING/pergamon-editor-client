import {defaultDocument, IDocument} from "./document";

export interface IAnnotation {
	attributes?: any;
	children?: IAnnotation[],
	document?: IDocument,
	end: number,
	id?: number | string;
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
				id: `random-id-${Math.floor(Math.random() * 10000)}`,
				start: action.start,
				end: action.end,
				type: action.annotation_type,
			}};
			break;
		}

		case 'CLEAR_ANNOTATION': {
			nextState = initialState;
			break;
		}

		case 'ACTIVATE_ANNOTATION': {
			nextState = (action.annotation == null) ?
				initialState :
				{ ...nextState, ...action.annotation };
			break;
		}

		case 'CREATE_ANNOTATION_PROPS': {
			nextState = {
				...nextState,
				...{ document: defaultDocument}
			};
			break;
		}

		case 'CHANGE_ANNOTATION_PROPS': {
			nextState = { ...nextState, ...action.props };

			break;
		}

		case 'CREATE_ANNOTATION_DOCUMENT': {
			const nextDocument = {
				...defaultDocument,
				...{ id: `some-id-${Math.floor(Math.random() * 10000)}`}
			};

			nextState = {
				...nextState,
				...{ document: nextDocument },
			};

			break;
		}

		case 'CHANGE_ANNOTATION_DOCUMENT': {
			const nextDocument = {
				...nextState.document,
				...action.props,
			};

			nextState = {
				...nextState,
				...{ document: nextDocument },
			};

			break;
		}


		default:
	}

	return nextState;
};
