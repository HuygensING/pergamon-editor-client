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
					activeDocument={props.activeDocument}
					annotation={annotation}
					changeAnnotationDocument={props.changeAnnotationDocument}
					changeAnnotationProps={props.changeAnnotationProps}
					createAnnotationDocument={props.createAnnotationDocument}
					deleteAnnotation={props.deleteAnnotation}
					key={index}
				/>
			)
		}
	</Ul>;

export default AnnotationList;
