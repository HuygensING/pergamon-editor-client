import {activateDocument, deactivateAnnotation} from "./root";
import {IAnnotation} from "../reducers/documents";

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
		state.root.rootDocumentId;

	dispatch(activateDocument(documentId))

	dispatch(deactivateAnnotation());
};
