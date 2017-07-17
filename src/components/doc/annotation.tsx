import * as React from 'react';
import styled from "styled-components";
import {Head4} from "./index";
import AnnotationList from "./annotation-list";
import AnnotationForm from "./annotation-form";

const Li = styled.li`
`;

const Small = styled.small`
	margin-left: 1em;
`;

const Annotation = ({
	activateAnnotation,
	activateAnnotationDocument,
	activeAnnotation,
	activeAnnotationDocument,
	activeDocument,
	annotation,
	createAnnotationDocument,
	deleteAnnotation,
	documents,
	updateAnnotation,
	updateText,
}) =>
	<Li>
		<Head4 onClick={() =>
			activateAnnotation(annotation.id)
		}>
			{annotation.type}
			<Small>({annotation.start} - {annotation.end})</Small>
		</Head4>
		{
			(activeAnnotation != null && annotation.id === activeAnnotation.id) ?
				<AnnotationForm
					activateAnnotationDocument={activateAnnotationDocument}
					activeAnnotationDocument={activeAnnotationDocument}
					annotation={annotation}
				  createAnnotationDocument={createAnnotationDocument}
				  deleteAnnotation={deleteAnnotation}
				  text={activeDocument.text}
				  updateAnnotation={updateAnnotation}
				  updateText={updateText}
				/> :
				annotation.hasOwnProperty('documentId') ?
					documents.find(d => d.id === annotation.documentId).text :
					null
		}
		{
			(annotation.children != null) &&
			<AnnotationList
				activateAnnotation={activateAnnotation}
				annotations={annotation.children}
				text={activeDocument.text}
			/>
		}
	</Li>;

export default Annotation;
