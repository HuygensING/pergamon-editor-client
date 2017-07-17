import * as React from 'react';
import Button, {buttonBackgroundColor} from "./button";
import styled from "styled-components";

const messages = [
	'Really? :(',
	'Never coming back!',
	'Talk about it?',
	'Farewell...',
	'Go out with a BOOM!',
];

const StyledButton = styled(Button)`
	background-color: ${(props: { confirm: boolean }) =>
		props.confirm ? 'red' : buttonBackgroundColor};
	color: ${(props: { confirm: boolean }) =>
		props.confirm ? 'white' : 'black'};
	padding: 0 1em;
`;

class RemoveButton extends React.Component<any, any> {
	public state = {
		confirm: false,
	};

	public render()	{
		return (
			<StyledButton
				className={this.props.className}
				confirm={this.state.confirm}
				onClick={() => {
					if (this.state.confirm) {
						this.props.action();
					} else {
						this.setState({ confirm: true });
					}
				}}
				scale={this.props.scale}
			>
				{
					this.state.confirm ?
						messages.pickRandom() :
						this.props.children
				}
			</StyledButton>
		)
	}
}

export default RemoveButton;
