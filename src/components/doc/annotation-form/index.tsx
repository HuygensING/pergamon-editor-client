import * as React from 'react';
import HFSelect from 'hire-forms-select';
import HFInput from 'hire-forms-input';
import Textarea from './textarea';
import styled from "styled-components";
import tags from '../tags';
import Start from "./start";
import End from "./end";
import Button from "../../ui/button";
import RemoveButton from "../../ui/remove-button";
import TextAnnotation from "../text-annotation";

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

const AnnotationForm = ({
	activateChildDocument,
	annotation,
	changeAnnotationDocument,
	changeAnnotationProps,
	createAnnotationDocument,
	deleteAnnotation,
	text,
}) =>
	<Ul>
		<Li>
			<Label>ID</Label>
			<Immutable>{annotation.id}</Immutable>
		</Li>
		<Li>
			<Label>Text</Label>
			<Immutable>{ text.slice(annotation.start, annotation.end + 1) }</Immutable>
		</Li>
		{
			tags[annotation.type].display === 'inline' &&
			<Li>
				<Label>Render</Label>
				<TextAnnotation {...annotation}>
					{ text.slice(annotation.start, annotation.end + 1) }
				</TextAnnotation>
			</Li>
		}
		<Li>
			<Label>Type</Label>
			<Select
				options={Object.keys(tags).map((k) => ({ key: k, value: k}))}
			  onChange={type => changeAnnotationProps({ type })}
			  value={{ key: annotation.type, value: annotation.type }}
			/>
		</Li>
		<Li>
			<Label>Start</Label>
			<Start
				annotation={annotation}
			  changeAnnotationProps={changeAnnotationProps}
			  start={annotation.start}
			/>
		</Li>
		<Li>
			<Label>End</Label>
			<End
				annotation={annotation}
				changeAnnotationProps={changeAnnotationProps}
				end={annotation.end}
			/>
		</Li>
		<Li>
			<Label>
				Body
				{
					annotation.hasOwnProperty('document') &&
					<Button
						onClick={activateChildDocument}
					>
						✎
					</Button>
				}
			</Label>
			{
				annotation.hasOwnProperty('document') ?
					<Textarea
						annotation={annotation}
					  changeAnnotationDocument={changeAnnotationDocument}
					/> :
					<BodyButton onClick={() => createAnnotationDocument(annotation.id)}>
					Add body
					</BodyButton>
			}
		</Li>
		<Li>
			<Label></Label>
			<StyledRemoveButton
				action={deleteAnnotation}
			  id={annotation.id}
			>
				Delete {annotation.type} annotation
			</StyledRemoveButton>
		</Li>
	</Ul>;

export default AnnotationForm;