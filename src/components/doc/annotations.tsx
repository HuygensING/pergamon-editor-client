import * as React from 'react';
import AnnotationList from "./annotation-list";
import {Head2} from "./index";
import styled from "styled-components";
import {byStartEnd} from "./utils";

const SmallButton = styled.div`
	background: #EEE;
	border: 1px solid #DDD;
	border-radius: 3px;
	cursor: pointer;
	display: inline-block;
	font-size: 0.5em;	
	margin-left: 1em;
	width: 1.5em;
	height: 1.5em;
	text-align: center;
	line-height: 1.5em;
`;

const Wrapper = styled.div`
	height: 65vh;
	overflow: auto;
`;

class Annotations extends React.Component<any, any> {
	public state = {
		list: true,
	};

	public render() {
		const {activateAnnotation, annotationList, annotationTree, text} = this.props;
		return (
			<div>
				<Head2>
					Annotations
					<SmallButton onClick={() => this.setState({list: true})}>☰</SmallButton>
					<SmallButton onClick={() => this.setState({list: false})}>Ͱ</SmallButton>
				</Head2>
				<Wrapper>
					<AnnotationList
						activateAnnotation={activateAnnotation}
						annotations={
							(this.state.list) ?
								annotationList.sort(byStartEnd) :
								annotationTree
						}
						text={text}
					/>
				</Wrapper>
			</div>
		);
	}
}

export default Annotations;
