import * as React from 'react';
import HFSelect from 'hire-forms-select';
import HFInput from 'hire-forms-input';
import tags from '../tags';
import styled from "styled-components";
import Start from "./start/index";
import End from "./end/index";

const inputEl = `
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

const AnnotationForm = ({
	annotation,
	changeAnnotationProps,
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
	</Ul>;

export default AnnotationForm;