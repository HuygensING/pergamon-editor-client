import * as React from 'react';
import fillGaps from "./fill-gaps";
import TextAnnotation from "./text-annotation";

const TextTree = ({ annotation, root, text }) => {
	const children = (root.hasOwnProperty('children') && root.children.length) ?
		root.children
			.reduce(fillGaps(root), [])
			.map((child, i) =>
				<TextTree
					root={child}
					annotation={annotation}
					text={text}
					key={i}
				/>
			) :
		text.slice(root.start, root.end);

	return (
		<TextAnnotation
			activeAnnotation={annotation}
			annotation={root}
		>
			{children}
		</TextAnnotation>
	);
};

export default TextTree;
