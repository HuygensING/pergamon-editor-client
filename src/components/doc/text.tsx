import * as React from 'react';
import styled from "styled-components";
import Textarea from 'hire-forms-textarea';

const TextTextarea = styled(Textarea)`
	border: none;
	font-family: 'sans-serif';
	height: 65vh;
	outline: none;
	width: 100%;
`;

const Text = ({createAnnotation, text, setDocumentText}) =>
	<div>
		<TextTextarea
			onChange={(text: string, ev: any) => setDocumentText(text, ev)}
			onMouseUp={createAnnotation}
			value={text}
		/>
	</div>;

export default Text;
