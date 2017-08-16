import * as React from 'react';
import styled from "styled-components";
import Textarea from 'hire-forms-textarea';
import {debounceWait} from "../../../../constants";
import TextHeader from "./header";
import {Column, ColumnBody} from "../columns";

const TextTextarea = styled(Textarea)`
	border: none;
	font-family: 'sans-serif';
	height: 100%;
	outline: none;
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
			<Column>
				<TextHeader
					percentage={percentage}
					requestStart={requestStart}
				/>
				<ColumnBody style={{overflow: 'hidden'}}>
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
				</ColumnBody>
			</Column>
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
