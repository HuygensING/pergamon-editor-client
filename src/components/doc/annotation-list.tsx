import * as React from 'react';
import styled from 'styled-components';
import Annotation from "./annotation";
import { orange } from '../../constants';

const Ul = styled.ul`
	& ul {
		border-left: 2px solid ${orange};
		padding-left: 1em;
	}	
`;

const AnnotationList = (props) =>
	<Ul>
		{
			props.annotations.map((annotation, index) =>
				<Annotation
					activateAnnotation={props.activateAnnotation}
					activateChildDocument={props.activateChildDocument}
					activeAnnotation={props.annotation}
					annotation={annotation}
					changeAnnotationDocument={props.changeAnnotationDocument}
					changeAnnotationProps={props.changeAnnotationProps}
					createAnnotationDocument={props.createAnnotationDocument}
					deleteAnnotation={props.deleteAnnotation}
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