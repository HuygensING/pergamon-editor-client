import * as React from 'react';
import styled from "styled-components";
import {Head3} from "./index";
import TextAnnotation from "./text-annotation";
import AnnotationList from "./annotation-list";
import AnnotationForm from "./annotation-form";

const Li = styled.li`
`;

const Annotation = ({
  activateAnnotation,
	activeAnnotation,
	annotation,
	changeAnnotationProps,
	text
}) =>
	<Li>
		<Head3 onClick={() => activateAnnotation(annotation.id)}>
			{annotation.start} - {annotation.end}, {annotation.type}
		</Head3>
		{
			(activeAnnotation != null && annotation.id === activeAnnotation.id) ?
				<AnnotationForm
					annotation={annotation}
				  changeAnnotationProps={changeAnnotationProps}
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
