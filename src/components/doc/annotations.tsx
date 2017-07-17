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
	activateAnnotationDocument: (string) => void;
	activeAnnotationDocument: IDocument;
	activeDocument: IDocument;
	annotation: IAnnotation;
	createAnnotationDocument: (string) => void;
	deleteAnnotation: (string) => void;
	documents: IDocument[];
	updateAnnotation: (any) => void;
	updateText: (any) => void;
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
			activateAnnotationDocument,
			activeAnnotationDocument,
			activeDocument,
			annotation,
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
						activeDocument={activeDocument}
						annotation={annotation}
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
