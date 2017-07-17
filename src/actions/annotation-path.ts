import {setDocument, setDocumentId} from "./document";
import {deactivateAnnotation} from "./annotation";
export const activateChildDocument = () => async (dispatch, getState) => {
	const annotation = getState().annotation;

	await dispatch(setDocument(annotation.document));

	dispatch({
		type: 'ANNOTATION_PATH_ADD',
		annotation,
	});

	dispatch(deactivateAnnotation());
};

export const goToChildDocument = (index) => async (dispatch, getState) => {
	dispatch({
		type: 'ANNOTATION_PATH_GO_TO_INDEX',
		index,
	});

	const state = getState();
	const annotation = state.annotationPath.last();

	if (annotation != null) {
		await dispatch(setDocumentId(annotation.document.id));
	} else {
		await dispatch(setDocument(state.root));
	}

	dispatch(deactivateAnnotation());
};

