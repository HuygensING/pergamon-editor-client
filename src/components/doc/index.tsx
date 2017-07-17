import * as React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import {setDocumentId, setDocumentText} from "../../actions/document";
import TextTree from "./text-tree";
import Text from "./text";
import {activateAnnotation, changeAnnotationProps, createAnnotation, deleteAnnotation} from "../../actions/annotation";
import Annotations from "./annotations";
import {
	changeAnnotationDocument,
	createAnnotationDocument,
} from "../../actions/annotation-document";
import {activateChildDocument, goToChildDocument} from "../../actions/annotation-path";
import Menu from "./menu";

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

class Doc extends React.Component<any, any> {
	public componentDidMount() {
		this.props.setDocumentId(this.props.match.params.id, true);
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.props.setDocumentId(nextProps.match.params.id, true);
		}
	}

	public render() {
		const {
			activateAnnotation,
			activateChildDocument,
			annotation,
			annotationsInPath,
			changeAnnotationProps,
			changeAnnotationDocument,
			createAnnotation,
			createAnnotationDocument,
			deleteAnnotation,
			doc,
			documents,
			goToChildDocument,
			root,
			setDocumentText,
		} = this.props;

		const { annotations, text, tree } = doc;

		if (root == null || doc.id == null) return null;

		return (
			<Div>
				<Menu
					annotationsInPath={annotationsInPath}
					doc={doc}
					documents={documents}
				  goToChildDocument={goToChildDocument}
				  root={root}
				/>
				<Column>
					<Head3>Text</Head3>
					<Text
						createAnnotation={createAnnotation}
						setDocumentText={setDocumentText}
						text={text}
					/>
				</Column>
				<Column>
					<Head3>Output</Head3>
					<TextTree
						annotation={annotation}
						root={tree}
						text={text}
					/>
				</Column>
				<Column>
					<Annotations
						activateAnnotation={activateAnnotation}
						activateChildDocument={activateChildDocument}
						annotation={annotation}
						annotationList={annotations}
						annotationTree={tree.children}
						changeAnnotationDocument={changeAnnotationDocument}
						changeAnnotationProps={changeAnnotationProps}
						createAnnotationDocument={createAnnotationDocument}
						deleteAnnotation={deleteAnnotation}
						text={text}
					/>
				</Column>
			</Div>
		);
	}
}

export default connect(
	state => ({
		doc: state.document,
		documents: state.documents,
		annotationsInPath: state.annotationPath,
		root: state.root,
		annotation: state.annotation,
	}),
	{
		activateAnnotation,
		activateChildDocument,
		changeAnnotationProps,
		changeAnnotationDocument,
		createAnnotation,
		createAnnotationDocument,
		deleteAnnotation,
		goToChildDocument,
		setDocumentId,
		setDocumentText,
	}
)(Doc);