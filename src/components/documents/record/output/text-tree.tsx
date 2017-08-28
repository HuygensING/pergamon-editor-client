import * as React from 'react';
import TextAnnotation, {ITextAnnotationCommon} from "./text-annotation";
import {IAnnotation} from "../../../../reducers/documents";

interface ITextTree extends ITextAnnotationCommon {
	root: IAnnotation;
	text: string;
}

const TextTree: React.SFC<ITextTree> = (props) => {
	const children = (props.root.hasOwnProperty('children') && props.root.children.length) ?
		props.root.children
			.map((child, i) =>
				<TextTree
					activateAnnotationDocument={props.activateAnnotationDocument}
					activateNote={props.activateNote}
					activeNoteId={props.activeNoteId}
					activeAnnotation={props.activeAnnotation}
					activeAnnotationDocument={props.activeAnnotationDocument}
					documents={props.documents}
					key={i}
					root={child}
					text={props.text}
				/>
			) :
		props.text.slice(props.root.start, props.root.end);

	return (
		<TextAnnotation
			activateAnnotationDocument={props.activateAnnotationDocument}
			activateNote={props.activateNote}
			activeAnnotation={props.activeAnnotation}
			activeAnnotationDocument={props.activeAnnotationDocument}
			activeNoteId={props.activeNoteId}
			annotation={props.root}
		  documents={props.documents}
		>
			{children}
		</TextAnnotation>
	);
};

export default TextTree;
