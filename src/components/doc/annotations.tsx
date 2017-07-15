import * as React from 'react';
import AnnotationList from "./annotation-list";
import {Head2} from "./index";
import styled from "styled-components";
import {byStartEnd} from "./utils";
import {IAnnotation} from "../../reducers/annotation";
import Button from "../ui/button";

interface IProps {
	activateAnnotation: (string) => void;
	activateChildDocument: (string) => void;
	annotation: IAnnotation;
	annotationList: IAnnotation[];
	annotationTree: IAnnotation;
	changeAnnotationProps: (any) => void;
	changeAnnotationDocument: (any) => void;
	createAnnotationDocument: (string) => void;
	text: string;
}

interface IState {
	list: boolean;
}

const Wrapper = styled.div`
	height: 65vh;
	overflow: auto;
`;

const HeadButton = styled(Button)`
	margin-left: 1em;
`;

class Annotations extends React.Component<IProps, IState> {
	public state = {
		list: true,
	};

	public render() {
		const {
			activateAnnotation,
			activateChildDocument,
			annotation,
			annotationList,
			annotationTree,
			changeAnnotationDocument,
			changeAnnotationProps,
			createAnnotationDocument,
			text
		} = this.props;
		return (
			<div>
				<Head2>
					Annotations
					<HeadButton
						onClick={() => this.setState({list: true})}
					  scale="0.5"
					>
						☰
					</HeadButton>
					<HeadButton
						onClick={() => this.setState({list: false})}
					  scale="0.5"
					>
						Ͱ
					</HeadButton>
				</Head2>
				<Wrapper>
					<AnnotationList
						activateAnnotation={activateAnnotation}
						activateChildDocument={activateChildDocument}
						annotation={annotation}
						annotations={
							(this.state.list) ?
								annotationList.sort(byStartEnd) :
								annotationTree
						}
						changeAnnotationProps={changeAnnotationProps}
						createAnnotationDocument={createAnnotationDocument}
						changeAnnotationDocument={changeAnnotationDocument}
						text={text}
					/>
				</Wrapper>
			</div>
		);
	}
}

export default Annotations;
