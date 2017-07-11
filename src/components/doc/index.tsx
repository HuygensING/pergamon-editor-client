import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'hire-forms-select';
import styled from "styled-components";
import {setDocAnnotations, setDocId, setDocText} from "../../actions/doc";
import TextTree from "./text-tree";
import Text from "./text";
import {activateAnnotation, changeAnnotationProps, createAnnotation} from "../../actions/annotation";
import Annotations from "./annotations";
import history from '../../store/history';

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

const MenuItem = styled.div`
	width: 100px;
`;

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
			annotation,
			annotations,
			changeAnnotationProps,
			id,
			text,
			tree,
		} = this.props;

		if (id == null) return null;

		return (
			<div>
				<Menu>
					<MenuItem>
						<Select
							onChange={id => history.push(`/doc/${id}`)}
							options={[
								{ key: 'original', value: 'original' },
								{ key: 'typical', value: 'typical' },
								{ key: 'large', value: 'large' }
							]}
							value={{ key: id, value: id }}
						/>
					</MenuItem>
				</Menu>
				<Column>
					<Head2>Text</Head2>
					<Text {...this.props} />
				</Column>
				<Column>
					<Head2>Output</Head2>
					<TextTree
						annotation={annotation}
						root={tree}
						text={text}
					/>
				</Column>
				<Column>
					<Annotations
						annotation={annotation}
						activateAnnotation={activateAnnotation}
						annotationList={annotations}
						annotationTree={tree.children}
						changeAnnotationProps={changeAnnotationProps}
						text={text}
					/>
				</Column>
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