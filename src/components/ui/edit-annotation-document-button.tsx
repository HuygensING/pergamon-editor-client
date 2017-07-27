import * as React from "react";
import Button from "./button";
import {IAnnotation, IDocument} from "../../reducers/documents";
import styled from "styled-components";

const TopRightButton = styled(Button)`
	color: #BBB;
	position: absolute;
	right: 0;
	top: 0;
	
	&:hover {
		color: #444;
	}	
`;

interface IProps {
	activateAnnotationDocument: (IAnnotation, string) => void;
	activeAnnotation: IAnnotation;
	activeAnnotationDocument: IDocument;
	bare?: boolean;
	topRight?: boolean;
}

const EditAnnotationDocumentButton: React.SFC<IProps> = (props) => {
	const Comp = props.topRight ? TopRightButton : Button;

	return props.activeAnnotation.hasOwnProperty('documentId') &&
	<Comp
		bare={props.bare}
		onClick={() =>
			props.activateAnnotationDocument(
				props.activeAnnotation,
				props.activeAnnotationDocument.id
			)
		}
	>
		✎
	</Comp>;
};

export default EditAnnotationDocumentButton;
