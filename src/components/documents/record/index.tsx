import * as React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import TextTree from "./output/text-tree";
import Text from "./text/index";
import Annotations from "./annotations/index";
import {
	createAnnotationDocument, updateAnnotationDocumentText,
} from "../../../actions/documents";
import {activateAnnotationDocument, goToChildDocument} from "../../../actions/annotation-path";
import Menu from "./menu";
import {activateAnnotation, activateNote, setRootId} from "../../../actions/root";
import {createAnnotation, deleteAnnotation, updateAnnotation, updateText} from "../../../actions/documents";
import {Column, ColumnBody, ColumnHeader, Columns} from "./columns";

const Div = styled.div`
	display: flex;
	flex: 9;
	flex-direction: column;
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
				<Columns>
					<Text
						activeDocument={activeDocument}
						createAnnotation={createAnnotation}
						updateText={updateText}
					/>
					<Column>
						<ColumnHeader value="Output" />
						<ColumnBody style={{ position: 'relative' }}>
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
				</Columns>
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