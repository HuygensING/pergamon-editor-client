import * as React from 'react';
import styled from "styled-components";
import AnnotationList from "./annotation-list";
import AnnotationForm, {IAnnotationFormProps} from "./annotation-form";
import {IAnnotation, IDocument} from "../../../reducers/documents";
import TextTree from "./text-tree";
import {Head4} from "../../ui/index";

const Li = styled.li`
`;

const Small = styled.small`
	margin-left: 1em;
`;

export interface IAnnotationCommon extends IAnnotationFormProps {
	activateAnnotation: (string) => void;
	documents: IDocument[];
}

export interface IAnnotationProps extends IAnnotationCommon {
	annotation: IAnnotation;
}

const Annotation: React.SFC<IAnnotationProps> = (props) => {
	const annotationDocument = props.annotation.hasOwnProperty('documentId') ?
		props.documents.find(d => d.id === props.annotation.documentId) :
		null;

	return (
		<Li>
			<Head4 onClick={() =>
				props.activateAnnotation(props.annotation.id)
			}>
				{props.annotation.type}
				<Small>({props.annotation.start} - {props.annotation.end})</Small>
			</Head4>
			{
				(
					props.activeAnnotation != null &&
					props.annotation.id === props.activeAnnotation.id
				) ?
					<AnnotationForm
						activateAnnotationDocument={props.activateAnnotationDocument}
						activeAnnotation={props.activeAnnotation}
						activeAnnotationDocument={props.activeAnnotationDocument}
						activeDocument={props.activeDocument}
						createAnnotationDocument={props.createAnnotationDocument}
						deleteAnnotation={props.deleteAnnotation}
						updateAnnotation={props.updateAnnotation}
						updateAnnotationDocumentText={props.updateAnnotationDocumentText}
						updateText={props.updateText}
					/> :
					(
						annotationDocument != null &&
						annotationDocument.tree != null
					) ?
						<TextTree
							documents={props.documents}
							root={annotationDocument.tree}
							text={annotationDocument.text}
						/> :
						null
			}
			{
				(props.annotation.children != null) &&
				<AnnotationList
					activateAnnotation={props.activateAnnotation}
					activateAnnotationDocument={props.activateAnnotationDocument}
					activeAnnotation={props.annotation}
					activeAnnotationDocument={props.activeAnnotationDocument}
					activeDocument={props.activeDocument}
					annotations={props.annotation.children}
					createAnnotationDocument={props.createAnnotationDocument}
					deleteAnnotation={props.deleteAnnotation}
					documents={props.documents}
					updateAnnotation={props.updateAnnotation}
					updateAnnotationDocumentText={props.updateAnnotationDocumentText}
					updateText={props.updateText}
				/>
			}
		</Li>
	);
};

export default Annotation;

