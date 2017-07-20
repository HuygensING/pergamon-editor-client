import * as React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import TextTree from "./text-tree";
import Text from "./text";
import Annotations from "./annotations";
import {
	createAnnotationDocument, updateAnnotationDocumentText,
} from "../../actions/documents";
import {activateAnnotationDocument, goToChildDocument} from "../../actions/annotation-path";
import Menu from "./menu";
import {activateAnnotation, setRootId} from "../../actions/root";
import {createAnnotation, deleteAnnotation, updateAnnotation, updateText} from "../../actions/documents";

export const Head2 = styled.h2`
	margin: 0;
`;

export const Head3 = styled.h3`
	margin: 0;
`;

export const Head4 = styled.h4`
	color: #666;
	font-size: 1em;
	margin: 2em 0 0 0;
`;

const Div = styled.div`
	height: calc(100% - 8vh);
	position: relative;
`;

const Column = styled.div`
	box-sizing: border-box;
	display: inline-block;
	margin-bottom: 10vh;
	padding: 0 1vw;
	vertical-align: top;
	width: 32vw;
`;

class ActiveDocument extends React.Component<any, any> {
	public componentDidMount() {
		this.props.setRootId(this.props.match.params.id, true);
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.props.setRootId(nextProps.match.params.id, true);
		}
	}

	public render() {
		const {
			activateAnnotation,
			activateAnnotationDocument,
			activeAnnotationId,
			activeDocumentId,
			annotationsInPath,
			updateAnnotation,
			createAnnotation,
			createAnnotationDocument,
			deleteAnnotation,
			documents,
			goToChildDocument,
			rootDocumentId,
			updateAnnotationDocumentText,
			updateText,
		} = this.props;

		const rootDocument = documents.find(d => d.id === rootDocumentId);

		const activeDocument = documents
				.find(d => d.id === activeDocumentId);

		if (activeDocument == null) return null;

		const activeAnnotation = activeDocument.annotations
			.find(a => a.id === activeAnnotationId);

		const activeAnnotationDocument = (
			activeAnnotation != null &&
			activeAnnotation.hasOwnProperty('documentId')
		) ?
			documents.find(d => d.id === activeAnnotation.documentId) :
			null;

		return (
			<Div>
				<Menu
					annotationsInPath={annotationsInPath}
					activeDocument={activeDocument}
					documents={documents}
				  goToChildDocument={goToChildDocument}
				  root={rootDocument}
				/>
				<Column>
					<Head3>Text</Head3>
					<Text
						activeDocument={activeDocument}
						createAnnotation={createAnnotation}
						updateText={updateText}
					/>
				</Column>
				<Column>
					<Head3>Output</Head3>
					<TextTree
						annotation={activeAnnotation}
						root={activeDocument.tree}
					  text={activeDocument.text}
					/>
				</Column>
				<Column>
					<Annotations
						activateAnnotation={activateAnnotation}
						activateAnnotationDocument={activateAnnotationDocument}
						activeAnnotationDocument={activeAnnotationDocument}
						activeAnnotation={activeAnnotation}
						activeDocument={activeDocument}
						createAnnotationDocument={createAnnotationDocument}
						deleteAnnotation={deleteAnnotation}
						documents={documents}
						updateAnnotation={updateAnnotation}
						updateAnnotationDocumentText={updateAnnotationDocumentText}
					  updateText={updateText}
					/>
				</Column>
			</Div>
		);
	}
}

export default connect(
	state => ({
		activeAnnotationId: state.root.active_annotation_id,
		annotationsInPath: state.annotationPath,
		activeDocumentId: state.root.active_document_id,
		documents: state.documents,
		rootDocumentId: state.root.root_document_id,
	}),
	{
		activateAnnotation,
		activateAnnotationDocument,
		updateAnnotation,
		createAnnotation,
		createAnnotationDocument,
		deleteAnnotation,
		goToChildDocument,
		updateAnnotationDocumentText,
		updateText,
		setRootId,
	}
)(ActiveDocument);