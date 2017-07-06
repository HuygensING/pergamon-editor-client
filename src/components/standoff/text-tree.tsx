import * as React from 'react';
import fillGaps from "./fill-gaps";
import componentByTag from './tags';

const TextTree = (props) => {
	const { index, root, text } = props;
	if (!componentByTag.hasOwnProperty(root.type)) {
		throw new Error(`Component not found: ${root.type}`);
	}
	const Comp = componentByTag[root.type].component;

	return root.hasOwnProperty('children') ?
		<Comp
			end={root.end}
			id={root.id}
			start={root.start}
			type={root.type}
		>
			{
				root.children
					.reduce(fillGaps(root), [])
					.map((root, i) =>
						<TextTree
							key={i}
							root={root}
						  text={text}
						/>
					)
			}
		</Comp>	:
		<Comp
			end={root.end}
			id={root.id}
			key={index}
			start={root.start}
			type={root.type}
		>
			{text.slice(root.start, root.end + 1)}
		</Comp>;
};

export default TextTree;
