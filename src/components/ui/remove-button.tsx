import * as React from 'react';
import Button, {buttonBackgroundColor} from "./button";
import styled from "styled-components";

declare global {
	interface Array<T> {
		last(): T;
		pickRandom(): T;
	}
}

Array.prototype.last = function () {
	return this[this.length - 1];
};

Array.prototype.pickRandom = function () {
	return this[Math.floor(Math.random() * this.length)];
};

const messages = [
	'Really? :(',
	'Never coming back!',
	'Talk about it?',
	'Farewell...',
	'Go out with a BOOM!',
	'Life is short...'
];

const StyledButton = styled(Button)`
	background-color: ${(props: { confirm: boolean }) =>
		props.confirm ? 'red' : buttonBackgroundColor};
	color: ${(props: { confirm: boolean }) =>
		props.confirm ? 'white' : 'black'};
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
						this.props.action(this.props.id);
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
