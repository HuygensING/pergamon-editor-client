import * as React from 'react';
import fillGaps from "./fill-gaps";
import TextAnnotation from "./text-annotation";
import {IAnnotation, IDocument} from "../../reducers/documents";

interface ITextTree {
	activateNote?: (string) => void;
	activeNoteId?: string;
	activeAnnotation?: IAnnotation;
	documents: IDocument[];
	root: IAnnotation;
	text: string;
}

const TextTree: React.SFC<ITextTree> = (props) => {
	const children = (props.root.hasOwnProperty('children') && props.root.children.length) ?
		props.root.children
			.reduce(fillGaps(props.root), [])
			.map((child, i) =>
				<TextTree
					activateNote={props.activateNote}
					activeNoteId={props.activeNoteId}
					activeAnnotation={props.activeAnnotation}
					documents={props.documents}
					key={i}
					root={child}
					text={props.text}
				/>
			) :
		props.text.slice(props.root.start, props.root.end);

	return (
		<TextAnnotation
			activateNote={props.activateNote}
			activeAnnotation={props.activeAnnotation}
			activeNoteId={props.activeNoteId}
			annotation={props.root}
		  documents={props.documents}
		>
			{children}
		</TextAnnotation>
	);
};

export default TextTree;
