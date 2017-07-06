import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'hire-forms-select';
import Textarea from 'hire-forms-textarea';
import styled from "styled-components";
import {setDocAnnotations, setDocId, setDocText} from "../../actions/doc";
import TextTree from "./text-tree";

export const Head2 = styled.h2`
	margin: 0;
`;

const MyTextarea = styled(Textarea)`
	border: 1px solid #888;
	height: 65vh;
	width: 100%;
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

const Standoff = (props) =>
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
			<MyTextarea
				onChange={(text: string) => props.setDocText(text)}
				value={props.text}
			/>
		</Column>
		<Column>
			<Head2>Annotations</Head2>
			<MyTextarea
				onChange={(annotations: string) => props.setDocAnnotations(JSON.parse(annotations))}
				value={JSON.stringify(props.annotations, null, 2)}
			/>
		</Column>
		<Column>
			<Head2>Output</Head2>
			<TextTree
				root={props.tree}
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
	}),
	{
		setDocId,
		setDocText,
		setDocAnnotations,
	}
)(Standoff);