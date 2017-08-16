import * as React from 'react';
import AnnotationList from "./annotation-list";
import {ColumnBody} from "./index";
import styled from "styled-components";
import {byStartEnd} from "./utils";
import Button from "../../ui/button";
import {IAnnotationCommon} from "./annotation";
import HireFormsSelect from 'hire-forms-select';
import {Head3} from "../../ui";

const HeadButton = styled(Button)`
	display: inline-block;
	margin-left: 1em;
`;

const Select = styled(HireFormsSelect)`
	display: inline-block;
	margin-left: 1em;
	width: 75px;
`;

const H3 = styled(Head3)`
	display: inline-block;
`;

const Menu = styled.div`
	display: inline-block;
`;

type Filter = 'all' | 'xml' | 'user';
interface IState {
	filter: Filter;
	list: boolean;
}

class Annotations extends React.Component<IAnnotationCommon, IState> {
	public state = {
		filter: 'all' as Filter,
		list: true,
	};

	public render() {
		const {
			activateAnnotation,
			activateAnnotationDocument,
			activeAnnotationDocument,
			activeAnnotation,
			activeDocument,
			createAnnotationDocument,
			deleteAnnotation,
			documents,
			updateAnnotation,
			updateAnnotationDocumentText,
			updateText,
		} = this.props;

		const annotationList= activeDocument.annotations;
		const annotationTree= activeDocument.tree.children;
		console.log(this.state)

		return (
			<div>
				<header>
					<H3>
						Annotations
					</H3>
					<Menu>
						<HeadButton
							onClick={() => this.setState({list: true})}
							scale="0.5"
						>
							☰
						</HeadButton>
						<HeadButton
							onClick={() => this.setState({list: false})}
							scale="0.5"
						>
							Ͱ
						</HeadButton>
						<Select
							onChange={v => {
								this.setState({ filter: v })
							}}
							options={[
								{ key: 'all', value: 'all' },
								{ key: 'xml', value: 'xml' },
								{ key: 'user', value: 'user'}
							]}
							value={{ key: this.state.filter, value: this.state.filter}}
						/>
					</Menu>
				</header>
				<ColumnBody>
					<AnnotationList
						activateAnnotation={activateAnnotation}
						activateAnnotationDocument={activateAnnotationDocument}
						activeAnnotationDocument={activeAnnotationDocument}
						activeAnnotation={activeAnnotation}
						activeDocument={activeDocument}
						annotations={
							(this.state.list) ?
								annotationList
									.filter(a => this.state.filter === 'all' || a.source === this.state.filter)
									.sort(byStartEnd) :
								annotationTree
						}
						createAnnotationDocument={createAnnotationDocument}
						deleteAnnotation={deleteAnnotation}
						documents={documents}
						updateAnnotation={updateAnnotation}
						updateAnnotationDocumentText={updateAnnotationDocumentText}
						updateText={updateText}
					/>
				</ColumnBody>
			</div>
		);
	}
}

export default Annotations;
