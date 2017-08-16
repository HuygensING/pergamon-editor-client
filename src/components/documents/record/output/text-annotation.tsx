import * as React from 'react';
import componentByTag from './tags';
import styled from "styled-components";
import {orange, orangeRGB} from "../../../../constants";
import {IAnnotation, IDocument} from "../../../../reducers/documents";

export interface ITextAnnotationCommon {
	activateAnnotationDocument?: (IAnnotation, string) => void;
	activateNote?: (string) => void;
	activeAnnotation?: IAnnotation;
	activeAnnotationDocument?: IDocument;
	activeNoteId?: string;
	documents?: IDocument[];
}

interface ITextAnnotationProps extends ITextAnnotationCommon {
	annotation: IAnnotation;
}

const TextAnnotation: React.SFC<ITextAnnotationProps> = (props) => {
	if (!componentByTag.hasOwnProperty(props.annotation.type)) {
		throw new Error(`Component not found: ${props.annotation.type}`);
	}

	const Tag = componentByTag[props.annotation.type].component;

	const ActiveTag = styled(Tag)`
		background-color: rgba(${orangeRGB}, 0.03);
		border: 1px solid ${orange};
		box-shadow: 4px 4px 0px rgba(${orangeRGB}, 0.4);
		line-height: 2.8em;
		margin: 0.5em;
		padding: 0.5em;
	`;

	let Comp = Tag;
	if (props.annotation != null) {
		Comp = (
			props.activeAnnotation != null &&
			props.activeAnnotation.id === props.annotation.id
		) ?
			ActiveTag :
			Tag;
	}

	return (
		<Comp
			activateAnnotationDocument={props.activateAnnotationDocument}
			activeAnnotationDocument={props.activeAnnotationDocument}
			activateNote={props.activateNote}
			activeNoteId={props.activeNoteId}
			annotation={props.annotation}
			documents={props.documents}
		>
			{props.children}
		</Comp>
	);
};

export default TextAnnotation;
