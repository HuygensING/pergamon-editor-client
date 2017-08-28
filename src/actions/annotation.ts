import * as uuidv4 from 'uuid/v4';
import {addMessage} from 'hire-messages';
import {addDocument} from "./documents";
import {deactivateNote} from "./root";

const getContainerId = (container) => {
	if (container.nodeType === 3) container = container.parentElement;

	while (!container.hasAttribute('id'))	{
		container = container.parentElement;
	}

	return container.getAttribute('id');
};

const findInTree = (root, id) => {
	let stack = [];
	let node;
	stack.push(root);

	while (stack.length > 0) {
		node = stack.pop();
		if (node.id === id) {
			break;
		} else if (node.children && node.children.length) {
			for (let ii = 0; ii < node.children.length; ii += 1) {
				stack.push(node.children[ii]);
			}
		}
	}

	return node.id === id ? node : null;
};

const getAnnotation = async (id: string) => {
	const response = await fetch(`/api/annotations/${id}`);
	return await response.json();
};

export const deactivateAnnotation = () => async (dispatch, getState) => {
	dispatch({ type: 'DEACTIVATE_ANNOTATION' });
};


export const activateAnnotation = (id) => async (dispatch, getState) => {
	if (getState().root.activeAnnotationId !== id) {
		dispatch({
			id,
			type: 'ACTIVATE_ANNOTATION',
		});

		await dispatch(getAnnotationAnnotations(id));
		const annotation = await getAnnotation(id);
		if (annotation.body != null) {
			dispatch(updateAnnotation({ body: annotation.body }));
			await dispatch(addDocument(annotation.body));
		}
	} else {
		dispatch(deactivateAnnotation());
	}
};

export const getAnnotationAnnotations = (annotationId) => async (dispatch, getState) => {
	const response = await fetch(`/api/annotations/${annotationId}/annotations`);
	const annotations = await response.json();

	dispatch({
		type: 'UPDATE_ANNOTATION',
		documentId: getState().documents.active.id,
		annotationId,
		props: {
			annotations,
		}
	})
};

export const createAnnotation = (ev) => async (dispatch, getState) => {
	const sel = window.getSelection();
	if (sel.isCollapsed || !sel.rangeCount) return;

	const state = getState();
	const activeDocument = state.documents.active;

	if (activeDocument._activeNoteId != null || state.root.activeAnnotationId != null) {
		addMessage({
			type: 'error',
			value: 'Cannot create annotation when annotation or note is active',
		});
		return;
	}

	const range = sel.getRangeAt(0);
	const startContainerId = getContainerId(range.startContainer);
	const startAnnotation = findInTree(activeDocument.tree, startContainerId);
	// console.log('start', startContainerId, startAnnotation)
	const endContainerId = getContainerId(range.endContainer);
	const endAnnotation = findInTree(activeDocument.tree, endContainerId);
	// console.log('end', endContainerId, endAnnotation)
	// console.log('range', range)

	const selectionStart = startAnnotation.start + range.startOffset;
	const selectionEnd = endAnnotation.start + range.endOffset;

	const response = await fetch(`/api/documents/${activeDocument.id}/annotations`, {
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			end: selectionEnd,
			source: 'user',
			start: selectionStart,
			target: activeDocument.id,
			type: 'note',
		}),
		method: 'POST',
	});

	const annotation = await response.json();

	await dispatch({
		annotationId: annotation.id,
		annotationType: 'note',
		documentId: activeDocument.id,
		end: selectionEnd,
		start: selectionStart,
		type: 'CREATE_ANNOTATION',
	});

	dispatch(activateAnnotation(annotation.id));

	sel.removeAllRanges();
};

export const updateAnnotation = (props) => (dispatch, getState) => {
	const state = getState();

	dispatch({
		annotationId: state.root.activeAnnotationId,
		documentId: state.documents.active.id,
		props,
		type: 'UPDATE_ANNOTATION',
	});
};

export const updateAnnotationDocumentText =
	(text: string, ev: any, documentId: string) =>
		(dispatch, getState) =>
			dispatch({
				documentId: documentId,
				text,
				type: 'DOCUMENTS_UPDATE_ANNOTATION_DOCUMENT_TEXT',
			});

export const deleteAnnotation = () => (dispatch, getState) => {
	const state = getState();
	dispatch({
		annotationId: state.root.activeAnnotationId,
		documentId: state.documents.active.id,
		type: 'DOCUMENTS_DELETE_ANNOTATION',
	});

	dispatch(deactivateAnnotation());
};

export const createAnnotationDocument = (targetId?) => async (dispatch, getState) => {
	const root = getState().root;
	targetId = targetId == null ? root.activeAnnotationId : targetId;
	const id = uuidv4();

	const response = await fetch(`/api/documents/${id}`, {
		method: 'PUT',
	});

	dispatch({
		documentId: id,
		type: 'DOCUMENTS_CREATE_DOCUMENT',
	});

	if (response.status === 201) {
		const xhr2 = await fetch(`/api/annotations/${targetId}/body`, {
			method: 'PUT',
			body: id,
		});

		dispatch(updateAnnotation({ body: id }));
	}
};

export const createAnnotationOnAnnotation = (targetId) => async (dispatch, getState) => {
	const response = await fetch(`/api/annotations/${targetId}/annotations`, {
		body: JSON.stringify({
			type: 'note',
			target: targetId,
			source: 'user',
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
	});

	const json = await response.json();

	if (response.status === 201) {
		dispatch(createAnnotationDocument(json.target));
	}
};
