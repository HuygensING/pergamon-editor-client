import * as React from 'react';
import styled from "styled-components";

interface IProps {
	active: boolean;
	depth?: number;
	docId?: string;
}

const offset = '2%';
const Div = styled.div`
	background-color: ${(props: IProps) => props.active ? '#FFF' : 'rgba(0, 0, 0, 0.4)'};
	border: 1px solid black;
	left: ${offset};
	position: absolute;
	top: ${offset};
	bottom: ${offset};
	right: ${offset};
`;

class SubDoc extends React.Component<IProps, null> {
	public render() {
		return (
			<Div active={this.props.active}>
				{this.props.children}
			</Div>
		)
	}
}

export default SubDoc;