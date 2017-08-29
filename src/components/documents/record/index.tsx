import * as React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import TextTree from "./output/text-tree";
import Text from "./text/index";
import Annotations from "./annotations/index";
import {activateAnnotationDocument, goToChildDocument} from "../../../actions/annotation-path";
import Menu from "./menu";
import {activateNote} from "../../../actions/root";
import {setRootDocumentId, updateText} from "../../../actions/documents";
import {Column, ColumnBody, ColumnHeader, Columns} from "./columns";
import {
	activateAnnotation,
	createAnnotation, createAnnotationDocument, createAnnotationOnAnnotation, deleteAnnotation,
	updateAnnotation, updateAnnotationDocumentText
} from "../../../actions/annotation";

const Div = styled.div`
	display: flex;
	flex: 9;
	flex-direction: column;
	position: relative;
`;

class ActiveDocument extends React.Component<any, any> {
	public componentDidMount() {
		this.props.setRootDocumentId(this.props.match.params.id, true);
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.props.setRootDocumentId(nextProps.match.params.id, true);
		}
	}

	public render() {
		const {
			activateAnnotation,
			activateAnnotationDocument,
			activateNote,
			activeAnnotationId,
			activeDocument,
			annotationsInPath,
			updateAnnotation,
			createAnnotation,
			createAnnotationDocument,
			createAnnotationOnAnnotation,
			deleteAnnotation,
			documents,
			goToChildDocument,
			rootDocument,
			updateAnnotationDocumentText,
			updateText,
		} = this.props;

		if (rootDocument == null || activeDocument == null) return null;

		const activeAnnotation = activeDocument.annotations
			.find(a => a.id === activeAnnotationId);

		const activeAnnotationDocument = (
			activeAnnotation != null &&
			activeAnnotation.hasOwnProperty('body')
		) ?
			documents.find(d => d.id === activeAnnotation.body) :
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
					<Column>
						<ColumnHeader value="Output" />
						<ColumnBody style={{
							display: 'flex',
							flexDirection: 'column',
							position: 'relative',
						}}>
								<div
									style={{ flex: 1 }}
									onMouseUp={createAnnotation}
								>
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
								</div>
							{
								rootDocument.id !== activeDocument.id &&
								<ul
									style={{ display: 'flex', flex: 1 }}
								>
									<Text
										activeDocument={activeDocument}
										createAnnotation={createAnnotation}
										updateText={updateText}
									/>
								</ul>
							}
						</ColumnBody>
					</Column>
					<Annotations
						activateAnnotation={activateAnnotation}
						activateAnnotationDocument={activateAnnotationDocument}
						activeAnnotationDocument={activeAnnotationDocument}
						activeAnnotation={activeAnnotation}
						activeDocument={activeDocument}
						createAnnotationDocument={createAnnotationDocument}
						createAnnotationOnAnnotation={createAnnotationOnAnnotation}
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
		activeDocument: state.documents.active,
		documents: state.documents.all,
		rootDocument: state.documents.root,
	}),
	{
		activateAnnotation,
		activateAnnotationDocument,
		activateNote,
		updateAnnotation,
		createAnnotation,
		createAnnotationDocument,
		createAnnotationOnAnnotation,
		deleteAnnotation,
		goToChildDocument,
		updateAnnotationDocumentText,
		updateText,
		setRootDocumentId,
	}
)(ActiveDocument);