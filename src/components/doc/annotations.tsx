import * as React from 'react';
import AnnotationList from "./annotation-list";
import {Head2} from "./index";
import styled from "styled-components";
import {byStartEnd} from "./utils";
import Button from "../ui/button";
import {IAnnotationCommon} from "./annotation";

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

class Annotations extends React.Component<IAnnotationCommon, IState> {
	public state = {
		list: true,
	};

	public render() {
		const {
			activateAnnotation,
			activateAnnotationDocument,
			activeAnnotationDocument,
			activeAnnotation,
			activeDocument,
			createAnnotationDocument,
			deleteAnnotation,
			documents,
			updateAnnotation,
			updateText,
		} = this.props;

		const annotationList= activeDocument.annotations;
		const annotationTree= activeDocument.tree.children;

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
						activateAnnotationDocument={activateAnnotationDocument}
						activeAnnotationDocument={activeAnnotationDocument}
						activeAnnotation={activeAnnotation}
						activeDocument={activeDocument}
						annotations={
							(this.state.list) ?
								annotationList.sort(byStartEnd) :
								annotationTree
						}
						createAnnotationDocument={createAnnotationDocument}
						deleteAnnotation={deleteAnnotation}
						documents={documents}
						updateAnnotation={updateAnnotation}
						updateText={updateText}
					/>
				</Wrapper>
			</div>
		);
	}
}

export default Annotations;
