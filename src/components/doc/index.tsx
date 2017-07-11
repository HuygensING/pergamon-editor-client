import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'hire-forms-select';
import styled from "styled-components";
import {setDocAnnotations, setDocId, setDocText} from "../../actions/doc";
import TextTree from "./text-tree";
import Text from "./text";
import {activateAnnotation, changeAnnotationProps, createAnnotation} from "../../actions/annotation";
import Annotations from "./annotations";

export const Head2 = styled.h2`
	margin: 0;
`;

export const Head3 = styled.h3`
	color: #666;
	font-size: 1em;
	margin: 2em 0 0 0;
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
	background: #EEE;
	padding: 1vh 1vw;
	margin: 0 0 2em 0;
`;

const Doc = (props) =>
	<div className="standoff">
		<Menu>
			<Select
				onChange={(id) => {
					props.setDocId(id)
				}}
				options={[
					{ key: 'original', value: 'original' },
					{ key: 'typical', value: 'typical' },
					{ key: 'large', value: 'large' }
				]}
				value={{ key: props.id, value: props.id }}
			/>
		</Menu>
		<Column>
			<Head2>Text</Head2>
			<Text {...props} />
		</Column>
		<Column>
			<Head2>Output</Head2>
			<TextTree
				annotation={props.annotation}
				root={props.tree}
				text={props.text}
			/>
		</Column>
		<Column>
			<Annotations
				annotation={props.annotation}
				activateAnnotation={props.activateAnnotation}
				annotationList={props.annotations}
				annotationTree={props.tree.children}
				changeAnnotationProps={props.changeAnnotationProps}
				text={props.text}
			/>
		</Column>
	</div>;

export default connect(
	state => ({
		id: state.doc.id,
		annotations: state.doc.annotations,
		text: state.doc.text,
		tree: state.doc.tree,
		annotation: state.annotation,
	}),
	{
		activateAnnotation,
		changeAnnotationProps,
		createAnnotation,
		setDocId,
		setDocText,
		setDocAnnotations,
	}
)(Doc);