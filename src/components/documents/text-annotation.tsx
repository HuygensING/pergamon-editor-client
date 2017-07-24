import * as React from 'react';
import componentByTag from './tags';
import styled from "styled-components";
import {orange, orangeRGB} from "../../constants";
import {IAnnotation, IDocument} from "../../reducers/documents";

interface ITextAnnotationProps {
	activateNote?: (string) => void;
	activeAnnotation?: IAnnotation;
	activeNoteId?: string;
	annotation: IAnnotation;
	documents?: IDocument[];
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
