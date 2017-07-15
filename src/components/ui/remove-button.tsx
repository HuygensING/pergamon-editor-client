import * as React from 'react';
import Button from "./button";
import styled from "styled-components";

const StyledButton = styled(Button)`
`;

class RemoveButton extends React.Component<any, any> {
	public state = {
		confirmed: false,
	};

	public render()	{
		return (
			<StyledButton
				className={this.props.className}
				onClick={() => {
					if (this.state.confirmed) {
						this.props.action(this.props.id);
					} else {
						this.setState({ confirmed: true });
					}
				}}
				scale={this.props.scale}
			>
				{
					this.state.confirmed ?
						'Are you sure?' :
						this.props.children
				}
			</StyledButton>
		)
	}
}

export default RemoveButton;
