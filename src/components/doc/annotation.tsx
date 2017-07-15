import * as React from 'react';
import styled from "styled-components";
import {Head4} from "./index";
import TextAnnotation from "./text-annotation";
import AnnotationList from "./annotation-list";
import AnnotationForm from "./annotation-form";

const Li = styled.li`
`;

const Small = styled.small`
	margin-left: 1em;
`;

const Annotation = ({
  activateAnnotation,
	activateChildDocument,
	activeAnnotation,
	annotation,
	changeAnnotationDocument,
	changeAnnotationProps,
	createAnnotationDocument,
	text
}) =>
	<Li>
		<Head4 onClick={() => activateAnnotation(annotation.id)}>
			{annotation.type}
			<Small>({annotation.start} - {annotation.end})</Small>
		</Head4>
		{
			(activeAnnotation != null && annotation.id === activeAnnotation.id) ?
				<AnnotationForm
					activateChildDocument={activateChildDocument}
					annotation={annotation}
					changeAnnotationDocument={changeAnnotationDocument}
				  changeAnnotationProps={changeAnnotationProps}
				  createAnnotationDocument={createAnnotationDocument}
				  text={text}
				/> :
				<TextAnnotation {...annotation}>
					{ text.slice(annotation.start, annotation.end + 1) }
				</TextAnnotation>
		}
		{
			(annotation.children != null) &&
			<AnnotationList
				activateAnnotation={activateAnnotation}
				annotations={annotation.children}
				text={text}
			/>
		}
	</Li>;

export default Annotation;
