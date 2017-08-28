import {IAnnotation} from "../reducers/documents";
import {activateDocument} from "./documents";
import {deactivateAnnotation} from "./annotation";

export const activateAnnotationDocument = (annotation: IAnnotation, documentId: string) =>
	async (dispatch, getState) => {
		dispatch({
			type: 'ANNOTATION_PATH_ADD',
			annotation,
		});

		dispatch(activateDocument(documentId));
};

export const goToChildDocument = (index) => async (dispatch, getState) => {
	dispatch({
		type: 'ANNOTATION_PATH_GO_TO_INDEX',
		index,
	});

	const state = getState();
	const annotation = state.annotationPath.last();

	const documentId = (annotation != null) ?
		annotation.documentId :
		state.documents.root.id;

	dispatch(activateDocument(documentId))

	dispatch(deactivateAnnotation());
};
