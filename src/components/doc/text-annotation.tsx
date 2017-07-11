import * as React from 'react';
import componentByTag from './tags';
import styled from "styled-components";

const TextAnnotation = ({annotation, children, end, id, start, type}) => {
	if (!componentByTag.hasOwnProperty(type)) {
		throw new Error(`Component not found: ${type}`);
	}
	const Tag = componentByTag[type].component;

	const ActiveTag = styled(Tag)`
		background-color: rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(0, 0, 0, 0.2);
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
		margin: 0.5em;
		padding: 0.5em;
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
