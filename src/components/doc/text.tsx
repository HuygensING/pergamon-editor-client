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

const Text = ({createAnnotation, activeDocument, setDocumentText}) =>
	<div>
		<TextTextarea
			onChange={(text: string, ev: any) =>
				setDocumentText(activeDocument.id, text, ev)
			}
			onMouseUp={createAnnotation}
			value={activeDocument.text}
		/>
	</div>;

export default Text;
