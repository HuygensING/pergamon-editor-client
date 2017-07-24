import * as React from 'react';
import HFTextarea from 'hire-forms-textarea';
import styled from "styled-components";
import {IDocument} from "../../../reducers/documents";

const Textarea = styled(HFTextarea)`
	display: inline-block;
	outline: none;
	width: 70%;
`;

export interface IAnnotationFormTextareaProps {
	activeAnnotationDocument: IDocument;
	updateAnnotationDocumentText: (text: string, ev: any, documentId: string) => void;
}

interface IState {
	value: string;
}

class AnnotationDocumentTextarea extends React.Component<IAnnotationFormTextareaProps, IState> {
	public state = {
		value: this.props.activeAnnotationDocument.text
	};

	public render() {
		return (
			<Textarea
				autoresize
				onChange={(value, ev) => {
					this.setState({value});
					this.props.updateAnnotationDocumentText(value, ev, this.props.activeAnnotationDocument.id);
				}}
				value={this.state.value}
			/>
		);
	}
}

export default AnnotationDocumentTextarea;
