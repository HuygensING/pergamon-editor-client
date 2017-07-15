import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'hire-forms-select';
import styled from "styled-components";
import {setDocAnnotations, setDocId, setDocText} from "../../actions/document";
import TextTree from "./text-tree";
import Text from "./text";
import {activateAnnotation, changeAnnotationProps, createAnnotation, deleteAnnotation} from "../../actions/annotation";
import Annotations from "./annotations";
import history from '../../store/history';
import {
	activateChildDocument, changeAnnotationDocument,
	createAnnotationDocument
} from "../../actions/annotation-document";
import SubDoc from "./sub-doc";

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

const Menu = styled.div`
	background: #DDD;
	padding: 1vh 1vw;
	margin: 0;
`;

const MenuItem = styled.div`
	width: 100px;
`;

const Header = styled.div`
	background: #EEE;
	padding: 2vh 1vw;
`;

const renderChildDocument = (subDocs, depth=0) =>
	subDocs.length ?
		<SubDoc
			active={subDocs.length === 1}
			depth={depth}
			docId={subDocs[0]}
		>
			{renderChildDocument(subDocs.slice(1), ++depth)}
		</SubDoc> :
		null;

class Doc extends React.Component<any, any> {
	public componentDidMount() {
		this.props.setDocId(this.props.match.params.id);
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.props.setDocId(nextProps.match.params.id);
		}
	}

	public render() {
		const {
			activateAnnotation,
			activateChildDocument,
			annotation,
			changeAnnotationProps,
			changeAnnotationDocument,
			createAnnotation,
			createAnnotationDocument,
			deleteAnnotation,
			doc,
			documents,
			setDocText,
		} = this.props;

		const { annotations, id, text, tree } = doc;

		if (id == null) return null;

		return (
			<Div>
				<Menu>
					<MenuItem>
						<Select
							onChange={id => history.push(`/document/${id}`)}
							options={documents.map(d => ({
								key: d.id,
								value: d.id,
							}))}
							value={{ key: id, value: id }}
						/>
					</MenuItem>
				</Menu>
				<Header>
					<Head2>{id}</Head2>
				</Header>
				<Column>
					<Head3>Text</Head3>
					<Text
						createAnnotation={createAnnotation}
						setDocText={setDocText}
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
				{renderChildDocument(this.props.annotationPath)}
			</Div>
		);
	}
}

export default connect(
	state => ({
		doc: state.doc.active,
		documents: state.doc.all,
		annotationPath: state.annotationPath,
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
		setDocId,
		setDocText,
		setDocAnnotations,
	}
)(Doc);