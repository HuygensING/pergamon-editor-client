import * as React from 'react';
import styled from 'styled-components';
import Annotation from "./annotation";

const Ul = styled.ul`
	& ul {
		border-left: 2px solid #DDD;
		padding-left: 1em;
	}	
`;

const AnnotationList = (props) =>
	<Ul>
		{
			props.annotations.map((annotation, index) =>
				<Annotation
					activateAnnotation={props.activateAnnotation}
					activeAnnotation={props.annotation}
					changeAnnotationProps={props.changeAnnotationProps}
					annotation={annotation}
					key={index}
					text={props.text}
				/>
			)
		}
	</Ul>;

export default AnnotationList;


{/*<MyTextarea*/}
	{/*onChange={(annotations: string) => props.setDocAnnotations(JSON.parse(annotations))}*/}
	{/*value={JSON.stringify(props.annotations, null, 2)}*/}
{/*/>*/}