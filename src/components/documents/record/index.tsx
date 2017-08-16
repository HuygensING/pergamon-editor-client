import * as React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import TextTree from "./text-tree";
import Text from "./text";
import Annotations from "./annotations";
import {
	createAnnotationDocument, updateAnnotationDocumentText,
} from "../../../actions/documents";
import {activateAnnotationDocument, goToChildDocument} from "../../../actions/annotation-path";
import Menu from "./menu";
import {activateAnnotation, activateNote, setRootId} from "../../../actions/root";
import {createAnnotation, deleteAnnotation, updateAnnotation, updateText} from "../../../actions/documents";
import {Head3} from "../../ui/index";

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

export const ColumnBody = styled.div`
	box-sizing: border-box;
	height: 65vh;
	overflow-y: auto;
	position: relative;
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
			activateNote,
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
		if (rootDocument == null) return null;

		const activeDocument = documents.find(d => d.id === activeDocumentId);
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
					<Text
						activeDocument={activeDocument}
						createAnnotation={createAnnotation}
						updateText={updateText}
					/>
				</Column>
				<Column>
					<Head3>Output</Head3>
					<ColumnBody>
						<TextTree
							activateAnnotationDocument={activateAnnotationDocument}
							activateNote={activateNote}
							activeAnnotationDocument={activeAnnotationDocument}
							activeNoteId={activeDocument._activeNoteId}
							activeAnnotation={activeAnnotation}
							documents={documents}
							root={activeDocument.tree}
							text={activeDocument.text}
						/>
					</ColumnBody>
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
		activeAnnotationId: state.root.activeAnnotationId,
		annotationsInPath: state.annotationPath,
		activeDocumentId: state.root.activeDocumentId,
		documents: state.documents,
		rootDocumentId: state.root.rootDocumentId,
	}),
	{
		activateAnnotation, activateAnnotationDocument,
		activateNote,
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