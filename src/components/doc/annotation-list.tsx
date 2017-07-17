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
					activateAnnotationDocument={props.activateAnnotationDocument}
					activeAnnotation={props.annotation}
					activeAnnotationDocument={props.activeAnnotationDocument}
					activeDocument={props.activeDocument}
					annotation={annotation}
					createAnnotationDocument={props.createAnnotationDocument}
					deleteAnnotation={props.deleteAnnotation}
					documents={props.documents}
					key={index}
					updateAnnotation={props.updateAnnotation}
				  updateText={props.updateText}
				/>
			)
		}
	</Ul>;

export default AnnotationList;
