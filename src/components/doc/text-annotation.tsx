import * as React from 'react';
import componentByTag from './tags';
import styled from "styled-components";

const TextAnnotation = ({annotation, children, end, id, start, type}) => {
	if (!componentByTag.hasOwnProperty(type)) {
		throw new Error(`Component not found: ${type}`);
	}
	const Tag = componentByTag[type].component;

	const ActiveTag = styled(Tag)`
		background: red;
		color: white;
	`;

	let Comp = Tag;
	if (annotation != null) {
		Comp = annotation.id === id ? ActiveTag : Tag;
	}

	return (
		<Comp>
			{children}
		</Comp>
	);
};

export default TextAnnotation;
