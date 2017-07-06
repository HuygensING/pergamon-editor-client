import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'hire-forms-select';
import Textarea from 'hire-forms-textarea';
import styled from "styled-components";
import {setDocAnnotations, setDocId, setDocText} from "../../actions/doc";
import TextTree from "./text-tree";

export const Head2 = styled.h2`
	margin: 2em 1em -0.5em 1em;
`;

const MyTextarea = styled(Textarea)`
	border: 1px solid #888;
	margin: 1em;
	max-height: 30vh;
	width: calc(100% - 2em);
`;

const Standoff = (props) =>
	<div>
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
		<Head2>Text</Head2>
		<MyTextarea
			onChange={(text: string) => props.setDocText(text)}
			value={props.text}
		/>
		<Head2>Annotations</Head2>
		<MyTextarea
			onChange={(annotations: string) => props.setDocAnnotations(JSON.parse(annotations))}
			value={JSON.stringify(props.annotations, null, 2)}
		/>
		<Head2>Output</Head2>
		<TextTree
			root={props.tree}
			text={props.text}
		/>
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