import * as React from 'react';
import fillGaps from "./fill-gaps";
import TextAnnotation from "./text-annotation";

const TextTree = ({ activeDocument, annotation }) => {
	const root = activeDocument.tree;
	const children = (root.hasOwnProperty('children') && root.children.length) ?
		root.children
			.reduce(fillGaps(root), [])
			.map((child, i) =>
				<TextTree
					activeDocument={activeDocument}
					annotation={annotation}
					key={i}
				/>
			) :
		activeDocument.text.slice(root.start, root.end + 1);

	return (
		<TextAnnotation
			annotation={annotation}
			{...root}
		>
			{children}
		</TextAnnotation>
	);
};

export default TextTree;
