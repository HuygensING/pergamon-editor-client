import {activateDocument, deactivateAnnotation} from "./root";
import {IAnnotation} from "../reducers/annotation";

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
		state.root.root_document_id;

	dispatch(activateDocument(documentId))

	dispatch(deactivateAnnotation());
};

