import * as React from 'react';
import HFSelect from 'hire-forms-select';
import HFInput from 'hire-forms-input';
import AnnotationDocumentTextarea, {IAnnotationFormTextareaProps} from './textarea';
import styled from "styled-components";
import tags from '../tags';
import Start from "./start";
import End from "./end";
import Button from "../../ui/button";
import RemoveButton from "../../ui/remove-button";
import TextAnnotation from "../text-annotation";
import {IAnnotation, IDocument} from "../../../reducers/documents";
import EditAnnotationDocumentButton from "../../ui/edit-annotation-document-button";

export const inputEl = `
	display: inline-block;
	width: 70%;
`;

const Ul = styled.ul`
	margin: 1em 0;
`;
const Li = styled.li`
	margin-bottom: 1em;
	width: 100%;
`;

const Label = styled.label`
	color: #666;
	display: inline-block;
	font-size: 0.8em;
	vertical-align: top;
	width: 30%;
`;

const Select = styled(HFSelect)`
	${inputEl}
`;

export const Input = styled(HFInput)`
	${inputEl}
`;

const Immutable = styled.div`
	${inputEl}
	color: #666;
	font-style: italic;
`;

const BodyButton = styled(Button)`
	${inputEl}
`;

const StyledRemoveButton = styled(RemoveButton)`
	${inputEl}
`;

export interface IAnnotationFormProps extends IAnnotationFormTextareaProps {
	activateAnnotationDocument: (IAnnotation, string) => void;
	activeAnnotation: IAnnotation;
	activeDocument: IDocument;
	createAnnotationDocument: (string) => void;
	deleteAnnotation: (string) => void;
	updateAnnotation: (any) => void;
	updateText: (text: string, ev: any, keyCode: number) => void;
}

const AnnotationForm: React.SFC<IAnnotationFormProps> = (props) =>
	<Ul>
		<Li>
			<Label>ID</Label>
			<Immutable>{props.activeAnnotation.id}</Immutable>
		</Li>
		<Li>
			<Label>Text</Label>
			<Immutable>
				{
					props.activeDocument.text
						.slice(props.activeAnnotation.start, props.activeAnnotation.end)
				}
			</Immutable>
		</Li>
		<Li>
			<Label>Type</Label>
			<Select
				options={Object.keys(tags).map((k) => ({ key: k, value: k}))}
			  onChange={type => props.updateAnnotation({ type })}
			  value={{
			  	key: props.activeAnnotation.type,
				  value: props.activeAnnotation.type
			  }}
			/>
		</Li>
		<Li>
			<Label>Start</Label>
			<Start
				activeAnnotation={props.activeAnnotation}
			  updateAnnotation={props.updateAnnotation}
			  start={props.activeAnnotation.start}
			/>
		</Li>
		<Li>
			<Label>End</Label>
			<End
				activeAnnotation={props.activeAnnotation}
				updateAnnotation={props.updateAnnotation}
				end={props.activeAnnotation.end}
			/>
		</Li>
		<Li>
			<Label>
				Body
				<EditAnnotationDocumentButton
					activateAnnotationDocument={props.activateAnnotationDocument}
					activeAnnotation={props.activeAnnotation}
					activeAnnotationDocument={props.activeAnnotationDocument}
				/>
			</Label>
			{
				props.activeAnnotation.hasOwnProperty('documentId') ?
					<AnnotationDocumentTextarea
						activeAnnotationDocument={props.activeAnnotationDocument}
					  updateAnnotationDocumentText={props.updateAnnotationDocumentText}
					/> :
					<BodyButton
						onClick={() =>
							props.createAnnotationDocument(props.activeAnnotation.id)
						}
					>
					Add body
					</BodyButton>
			}
		</Li>
		<Li>
			<Label></Label>
			<StyledRemoveButton
				action={props.deleteAnnotation}
			>
				Delete {props.activeAnnotation.type} annotation
			</StyledRemoveButton>
		</Li>
	</Ul>;

export default AnnotationForm;