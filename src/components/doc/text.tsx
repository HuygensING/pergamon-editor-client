import * as React from 'react';
import styled from "styled-components";
import Textarea from 'hire-forms-textarea';

const TextTextarea = styled(Textarea)`
	border: 1px solid #888;
	height: 65vh;
	width: 100%;
`;


const Text = ({createAnnotation, text, setDocText}) =>
	<div>
		<TextTextarea
			onChange={(text: string, ev: any) => setDocText(text, ev)}
			onMouseUp={createAnnotation}
			value={text}
		/>
	</div>;

export default Text;
