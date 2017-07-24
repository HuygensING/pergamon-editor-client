import * as React from 'react';
import HireTooltip from 'hire-tooltip';
import {IAnnotation} from "../../../reducers/documents";
import {InlineDiv} from "./base";
import styled from "styled-components";
import TextTree from "../text-tree";
import {ReactDOM} from "react";

const NoteNumber = InlineDiv.extend`
	background-color: #DDD;
	border: 1px solid #BBB;
	border-radius: 1em;
	cursor: pointer;
	font-size: 0.6em;
	line-height: 1.7em;
	margin-left: 0.2em;
	position: absolute;
	text-align: center;
	width: 1.9em;
`;

const Span = InlineDiv.extend`
	background-color: #EEE;
	
	${(props: { isLast: boolean }) =>
		props.isLast ?
			`margin-right: 1em;
			padding-right: 0.6em;` :
			''
	}			
`;

const Tooltip = styled(HireTooltip)`
	margin-left: -82px;
	margin-top: 34px;
	width: 180px;
`;

class Note extends React.Component<any, any> {
	public render()	 {
		const {
			activateNote,
			activeNoteId,
			annotation,
			children,
			documents,
		} = this.props;

		const annotationDocument = (
			documents != null &&
			annotation.hasOwnProperty('documentId')
		) ?
			documents.find(d => d.id === annotation.documentId) :
			null;

		const annotationDocumentId = annotationDocument ? annotationDocument.id : null;

		const isLast = ((
				!annotation.hasOwnProperty('__first') &&
				!annotation.hasOwnProperty('__segment') &&
				!annotation.hasOwnProperty('__last')
			) ||
			annotation.__last
		);

		return (
			<Span isLast={isLast}>
				{children}
				{
					isLast &&
					<NoteNumber
						onClick={() => activateNote(annotation.id, annotationDocumentId)}
					>
						N
						{
							activeNoteId === annotation.id &&
							<Tooltip
								borderColor="black"
							>
								{
									(
										annotationDocument &&
										annotationDocument.tree != null
									) ?
										<TextTree
											activateNote={activateNote}
											activeNoteId={activeNoteId}
											activeAnnotation={null}
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
