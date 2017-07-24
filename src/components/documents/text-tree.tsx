import * as React from 'react';
import fillGaps from "./fill-gaps";
import TextAnnotation from "./text-annotation";

const TextTree = ({
	activateNote,
	activeNoteId,
	activeAnnotation,
	documents,
	root,
	text
}) => {
	const children = (root.hasOwnProperty('children') && root.children.length) ?
		root.children
			.reduce(fillGaps(root), [])
			.map((child, i) =>
				<TextTree
					activateNote={activateNote}
					activeNoteId={activeNoteId}
					activeAnnotation={activeAnnotation}
					documents={documents}
					key={i}
					root={child}
					text={text}
				/>
			) :
		text.slice(root.start, root.end);

	return (
		<TextAnnotation
			activateNote={activateNote}
			activeAnnotation={activeAnnotation}
			activeNoteId={activeNoteId}
			annotation={root}
		  documents={documents}
		>
			{children}
		</TextAnnotation>
	);
};

export default TextTree;
