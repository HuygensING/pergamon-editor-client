import * as React from 'react';
import AnnotationList from "./annotation-list";
import {Head2} from "./index";
import styled from "styled-components";
import {byStartEnd} from "./utils";
import {IAnnotation} from "../../reducers/annotation";
import Button from "../ui/button";
import {IDocument} from "../../reducers/document";

interface IProps {
	activateAnnotation: (string) => void;
	activateChildDocument: (string) => void;
	activeDocument: IDocument;
	annotation: IAnnotation;
	updateAnnotation: (any) => void;
	changeAnnotationDocument: (any) => void;
	createAnnotationDocument: (string) => void;
	deleteAnnotation: (string) => void;
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
			activeDocument,
			activateChildDocument,
			annotation,
			changeAnnotationDocument,
			updateAnnotation,
			createAnnotationDocument,
			deleteAnnotation,
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
						activateChildDocument={activateChildDocument}
						activeDocument={activeDocument}
						annotation={annotation}
						annotations={
							(this.state.list) ?
								annotationList.sort(byStartEnd) :
								annotationTree
						}
						updateAnnotation={updateAnnotation}
						createAnnotationDocument={createAnnotationDocument}
						changeAnnotationDocument={changeAnnotationDocument}
						deleteAnnotation={deleteAnnotation}
					/>
				</Wrapper>
			</div>
		);
	}
}

export default Annotations;
