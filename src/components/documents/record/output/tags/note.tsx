import * as React from 'react';
import HireTooltip from 'hire-tooltip';
import {InlineDiv} from "./base";
import styled from "styled-components";
import TextTree from "../text-tree";
import {orangeLight, orangeRGB} from "../../../../../constants";
import EditAnnotationDocumentButton from "../../../../ui/edit-annotation-document-button";

interface INoteNumber {
	active: boolean;
}

const NoteNumber = InlineDiv.extend`
	background-color: ${(props: INoteNumber) =>
		props.active ?
			orangeLight :
			'#DDD'
	};
	border-radius: 1em;
	cursor: pointer;
	font-size: 10px;
	line-height: 1.9em;
	margin-left: 0.2em;
	position: absolute;
	text-align: center;
	width: 1.9em;
`;

interface ISpan {
	active: boolean;
	isLast: boolean;
}

const Span = InlineDiv.extend`
	background-color: ${(props: ISpan) =>
		props.active ?
			`rgba(${orangeRGB}, 0.2)` :
			'none'	
	};
	
	${(props: ISpan) =>
		props.isLast ?
			`margin-right: 1em;
			padding-right: 0.6em;` :
			''
	}			
`;

const Tooltip = styled(HireTooltip)`
	font-size: 16px;
	margin-left: calc(-10vw + 8px);
	margin-top: 16px;
	width: 20vw;
	z-index: 1;
`;

class Note extends React.Component<any, any> {
	public render()	 {
		const {
			activateAnnotationDocument,
			activateNote,
			activeAnnotationDocument,
			activeNoteId,
			annotation,
			children,
			className,
			documents,
		} = this.props;

		const annotationDocument = (
			documents != null &&
			annotation.hasOwnProperty('body')
		) ?
			documents.find(d => d.id === annotation.body) :
			null;

		const isLast = ((
				!annotation.hasOwnProperty('_first') &&
				!annotation.hasOwnProperty('_segment') &&
				!annotation.hasOwnProperty('_last')
			) ||
			annotation._last
		);

		const active = activeNoteId === annotation.id;

		return (
			<Span
				active={active}
				className={className}
				isLast={isLast}
			>
				{children}
				{
					isLast &&
					<NoteNumber
						active={active}
						onClick={(ev) => {
							ev.stopPropagation();
							if (activateNote) activateNote(annotation)
						}}
					>
						N
						{
							active &&
							<Tooltip
								borderColor="black"
							>
								<EditAnnotationDocumentButton
									activateAnnotationDocument={activateAnnotationDocument}
									activeAnnotation={annotation}
									activeAnnotationDocument={activeAnnotationDocument}
								  bare
								  topRight
								/>
								{
									(
										annotationDocument &&
										annotationDocument.tree != null
									) ?
										<TextTree
											activateNote={activateNote}
											activeNoteId={annotationDocument._activeNoteId}
											documents={documents}
											root={annotationDocument.tree}
											text={annotationDocument.text}
										/> :
										null
								}
							</Tooltip>
						}
					</NoteNumber>
				}
			</Span>
		)
	}
}

export default Note;
