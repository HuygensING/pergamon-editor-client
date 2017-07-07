import * as React from 'react';
import fillGaps from "./fill-gaps";
import TextAnnotation from "./text-annotation";

const TextTree = ({ annotation, root, text }) => {
	const children = root.hasOwnProperty('children') ?
		root.children
			.reduce(fillGaps(root), [])
			.map((child, i) =>
				<TextTree
					annotation={annotation}
					key={i}
					root={child}
					text={text}
				/>
			) :
		text.slice(root.start, root.end + 1);

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
