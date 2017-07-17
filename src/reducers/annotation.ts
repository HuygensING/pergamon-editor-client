import {defaultDocument, IDocument} from "./document";

export interface IAnnotation {
	attributes?: any;
	children?: IAnnotation[],
	// document?: IDocument,
	documentId?: string,
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
		// case 'ANNOTATION_CREATE': {
		// 	nextState = initialState;
		// 	nextState = { ...nextState, ...{
		// 		id: `random-id-${Math.floor(Math.random() * 10000)}`,
		// 		start: action.start,
		// 		end: action.end,
		// 		type: action.annotation_type,
		// 	}};
		// 	break;
		// }
		//
		// case 'ANNOTATION_CLEAR': {
		// 	nextState = initialState;
		// 	break;
		// }
		//
		// case 'ANNOTATION_ACTIVATE': {
		// 	nextState = (action.annotation == null) ?
		// 		initialState :
		// 		{ ...nextState, ...action.annotation };
		// 	break;
		// }
		//
		// case 'ANNOTATION_CHANGE_PROPS': {
		// 	nextState = { ...nextState, ...action.props };
		//
		// 	break;
		// }

		// case 'ANNOTATION_CREATE_DOCUMENT': {
		// 	const nextDocument = {
		// 		...defaultDocument,
		// 		...{ id: `some-id-${Math.floor(Math.random() * 10000)}`}
		// 	};
		//
		// 	nextState = {
		// 		...nextState,
		// 		...{ document: nextDocument },
		// 	};
		//
		// 	break;
		// }
		//
		// case 'ANNOTATION_CHANGE_DOCUMENT_PROPS': {
		// 	const nextDocument = {
		// 		...nextState.document,
		// 		...action.props,
		// 	};
		//
		// 	nextState = {
		// 		...nextState,
		// 		...{ document: nextDocument },
		// 	};
		//
		// 	break;
		// }


		default:
	}

	return nextState;
};
