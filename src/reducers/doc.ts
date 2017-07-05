import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';

const data = {
	typical,
	large,
	original,
};

interface IAnnotation {
	id: number | string;
	type: string;
	start: number,
	end: number,
}

interface IState {
	id: string;
	annotations: IAnnotation[],
	text: string;
}

const initialState: IState = {
	id: 'original',
	annotations: data.original.annotations,
	text: data.original.text,
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'SET_DOC_ID': {
			nextState = { ...nextState, ...{
				id: action.id,
				annotations: data[action.id].annotations,
				text: data[action.id].text,
			}};
			break;
		}

		case 'SET_DOC_TEXT': {
			nextState = { ...nextState, ...{
				text: action.text,
			}};
			break;
		}

		case 'SET_DOC_ANNOTATIONS': {
			nextState = { ...nextState, ...{
				annotations: action.annotations,
			}};
			break;
		}

		default:
	}

	return nextState;
};
