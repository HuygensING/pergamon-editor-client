import * as React from 'react';
import HFSelect from 'hire-forms-select';
import HFInput from 'hire-forms-input';
import AnnotationDocumentTextarea, {IAnnotationFormTextareaProps} from './textarea';
import styled from "styled-components";
import tags from '../../output/tags';
import Start from "./start";
import End from "./end";
import Button from "../../../../ui/button";
import RemoveButton from "../../../../ui/remove-button";
import {IAnnotation, IDocument} from "../../../../../reducers/documents";
import EditAnnotationDocumentButton from "../../../../ui/edit-annotation-document-button";

export const inputEl = `
	flex: 3;
`;

const Ul = styled.ul`
	margin: 1em 0;
`;
const Li = styled.li`
	display: flex;
	margin-bottom: 1em;
`;

const Label = styled.label`
	color: #666;
	flex: 1;
	font-size: 0.8em;
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

const Annotations = styled.ul`
	${inputEl}
	border-left: none !important;
	padding: 0 !important;
`;

export interface IAnnotationFormProps extends IAnnotationFormTextareaProps {
	activateAnnotationDocument: (IAnnotation, string) => void;
	activeAnnotation: IAnnotation;
	activeDocument: IDocument;
	createAnnotationDocument: (string) => void;
	createAnnotationOnAnnotation: (string) => void;
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
		{
			props.activeAnnotation.start < props.activeAnnotation.end &&
			<Li>
				<Label>Text</Label>
				<Immutable>
					{
						props.activeDocument.text
							.slice(props.activeAnnotation.start, props.activeAnnotation.end)
					}
				</Immutable>
			</Li>
		}
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
				props.activeAnnotationDocument != null ?
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
			<Label>Annotations</Label>
			<Annotations>
				<Li>
					<label></label>
					<Button
						onClick={() => props.createAnnotationOnAnnotation(props.activeAnnotation.id)}
					>
						Add annotation
					</Button>
				</Li>
				{
					props.activeAnnotation.hasOwnProperty('annotations') &&
					props.activeAnnotation.annotations.map((a, i) =>
						<Li key={i}>{a.id}{console.log(a)}</Li>
					)
				}
			</Annotations>
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