import * as React from 'react';
import HFTextarea from 'hire-forms-textarea';
import styled from "styled-components";

const Textarea = styled(HFTextarea)`
	display: inline-block;
	outline: none;
	width: 70%;
`;

class ChildDocumentTextarea extends React.Component<any, any> {
	public state = {
		value: this.props.annotation.document.text
	};

	public render() {
		return (
			<Textarea
				autoresize
				onChange={value => {
					this.setState({value});
					this.props.changeAnnotationDocument({
						text: value,
					});
				}}
				value={this.state.value}
			/>
		);
	}
}

export default ChildDocumentTextarea;
