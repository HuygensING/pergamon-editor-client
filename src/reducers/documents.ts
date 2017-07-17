import original from './docs/original';
import typical from './docs/typical';
import large from './docs/large';
import {IDocument} from "./document";

export const initialState: IDocument[] = [
	original,
	typical,
	large
];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENTS_ADD': {
			nextState = nextState.concat(action.document);

			break;
		}

		case 'DOCUMENTS_UPDATE': {
			nextState = nextState
				.filter((d) => d.id !== action.document.id)
				.concat(action.document);

			break;
		}

		default:
	}

	return nextState;
};
