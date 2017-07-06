import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'hire-forms-select';
import Textarea from 'hire-forms-textarea';
import fillGaps from "./fill-gaps";
import createTree from "./create-tree";
import {addRow, byDisplayStartEnd, byRowDisplayStartEnd, byStartEnd} from "./utils";
import {splitAnnotations} from "./split-annotations";
import componentByTag from './tags';
import styled from "styled-components";
import {setDocAnnotations, setDocId, setDocText} from "../../actions/doc";

export const Head2 = styled.h2`
	margin: 2em 1em -0.5em 1em;
`;

class Standoff extends React.Component<any, any> {
	private outputNode;

	private renderTree = (node, index?) => {
		if (!componentByTag.hasOwnProperty(node.type)) {
			throw new Error(`Component not found: ${node.type}`);
		}
		const Comp = componentByTag[node.type].component;
		return node.hasOwnProperty('children') ?
			<Comp
				end={node.end}
				id={node.id}
				start={node.start}
				type={node.type}
				key={index}
			>
				{
					node.children
						.reduce(fillGaps(node), [])
						.map(this.renderTree)
				}
			</Comp>	:
			<Comp
				end={node.end}
				id={node.id}
				key={index}
				start={node.start}
				type={node.type}
			>
				{this.props.text.slice(node.start, node.end + 1)}
			</Comp>;
	};

	public render() {
		const MyTextarea = styled(Textarea)`
			border: 1px solid #888;
			margin: 1em;
			max-height: 30vh;
			width: calc(100% - 2em);
		`;

		return (
			<div>
				<Select
					onChange={(id) => {
						this.props.setDocId(id)
					}}
					options={[
						{ key: 'original', value: 'original' },
						{ key: 'typical', value: 'typical' },
						{ key: 'large', value: 'large' }
					]}
				  value={{ key: this.props.id, value: this.props.id }}
				/>
				<Head2>Text</Head2>
				<MyTextarea
					onChange={(text: string) => this.props.setDocText({text})}
					value={this.props.text}
				/>
				<Head2>Annotations</Head2>
				<MyTextarea
					onChange={(annotations: string) => this.props.setDocAnnotations(JSON.parse(annotations))}
					value={JSON.stringify(this.props.annotations, null, 2)}
				/>
				<Head2>Output</Head2>
				<div ref={(node) => { this.outputNode = node; }}>
					{this.renderTree(this.props.tree)}
				</div>
			</div>
		);
	}
}

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