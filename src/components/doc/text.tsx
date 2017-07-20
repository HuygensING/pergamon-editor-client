import * as React from 'react';
import styled from "styled-components";
import Textarea from 'hire-forms-textarea';
import {debounceWait} from "../../actions/documents";
import {Head3} from "./index";

const TextTextarea = styled(Textarea)`
	border: none;
	font-family: 'sans-serif';
	height: 65vh;
	outline: none;
	width: 100%;
`;

const Div50 = styled.div`
	display: inline-block;
	width: 50%;
`;

const ProgressBar = Div50.extend`
	background-color: rgba(255, 0, 0, 0.1);
	border: 1px solid red;
	height: 1em;
	position: relative;
`;

const Bar = styled.div`
	background-color: rgba(255, 0, 0, 0.3);
	border: 1px solid rgba(0, 0, 0, 0);
	bottom: 0;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const ProgressText = styled.div`
	font-size: 0.8em;
	position: absolute;
	text-align: center;
	top: 0;
	width: 100%;
`;

interface IState {
	now?: number,
	percentage?: number,
	request?: number,
	requestStart?: number,
	value?: string,
}

class Text extends React.Component<any, IState> {
	public state = {
		now: null,
		percentage: null,
		request: null,
		requestStart: null,
		value: this.props.activeDocument.text,
	};

	componentWillReceiveProps(nextProps) {
		if (this.props.activeDocument.id != nextProps.activeDocument.id) {
			this.setState({ value: nextProps.activeDocument.text });
		}
	}

	public render() {
		const { updateText, createAnnotation } = this.props;
		const { percentage, requestStart } = this.state;
		return (
			<div>
				<Div50><Head3>Text</Head3></Div50>
				<ProgressBar>
					{
						requestStart != null &&
						<Bar style={{ width: `${percentage}%`}} />
					}
					{
						requestStart != null &&
						<ProgressText>
							Updating in {Math.floor(debounceWait - (debounceWait * (percentage / 100)))}ms
						</ProgressText>
					}
				</ProgressBar>
				<TextTextarea
					onInput={(text: string, ev: any, keyCode: number) => {
						this.setState({
							request: requestAnimationFrame(this.nextFrame),
							requestStart: Date.now(),
							value: text,
						});

						updateText(text, ev, keyCode);
					}}
					onMouseUp={(ev) => createAnnotation(ev)}
					value={this.state.value}
				/>
			</div>
		)
	}

	private nextFrame = () => {
		const nextNow = Date.now();
		const delta = Date.now() - this.state.requestStart;
		const percentage = (delta / debounceWait) * 100;
		const reset = percentage > 100;

		if (reset) cancelAnimationFrame(this.state.request);

		const nextState = reset ?
			{
				now: null,
				percentage: null,
				request: null,
				requestStart: null,
			} :
			{
				now: nextNow,
				percentage,
				request: requestAnimationFrame(this.nextFrame),
			};

		this.setState(nextState);
	}
}

export default Text;
