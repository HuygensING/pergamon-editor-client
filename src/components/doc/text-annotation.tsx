import * as React from 'react';
import componentByTag from './tags';
import styled from "styled-components";
import {orange, orangeRGB} from "../../constants";

const TextAnnotation = ({annotation, children, end, id, start, type}) => {
	if (!componentByTag.hasOwnProperty(type)) {
		throw new Error(`Component not found: ${type}`);
	}
	const Tag = componentByTag[type].component;

	const ActiveTag = styled(Tag)`
		background-color: rgba(${orangeRGB}, 0.03);
		border: 1px solid ${orange};
		box-shadow: 4px 4px 0px rgba(${orangeRGB}, 0.4);
		line-height: 2.8em;
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
