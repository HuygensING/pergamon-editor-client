import * as React from 'react';
import styled from 'styled-components';
import Annotation, {IAnnotationCommon} from "./annotation";
import { orange } from '../../constants';
import {IAnnotation} from "../../reducers/documents";

const Ul = styled.ul`
	& ul {
		border-left: 2px solid ${orange};
		padding-left: 1em;
	}	
`;

interface IAnnotationListProps extends IAnnotationCommon {
	annotations: IAnnotation[];
}

const AnnotationList: React.SFC<IAnnotationListProps> = (props) =>
	<Ul>
		{
			props.annotations.map((annotation, index) =>
				<Annotation
					activateAnnotation={props.activateAnnotation}
					activateAnnotationDocument={props.activateAnnotationDocument}
					activeAnnotation={props.activeAnnotation}
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
