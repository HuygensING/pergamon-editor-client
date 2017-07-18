import * as React from 'react';
import {Input} from "../index";
import {IAnnotation} from "../../../../reducers/documents";

interface IProps {
	activeAnnotation: IAnnotation;
	updateAnnotation: (any) => void;
	start: string;
}

interface IState {
	value: string;
}

class Start extends React.Component<IProps, IState> {
	public state = {
		value: (this.props.start != null) ? this.props.start : '',
	};

	public componentWillReceiveProps(nextProps) {
		if (nextProps.start !== this.state.value)	{
			this.setState({ value: nextProps.start });
		}
	}

	public render() {
		const { activeAnnotation, updateAnnotation } = this.props;
		const { value } = this.state;
		return (
			<Input
				onChange={value => {
					let start: number | string = parseInt(value, 10);
					if (Number.isNaN(start)) start = '';
					this.setState({value: start.toString()});
				}}
				validate={value => {
					const start: number = parseInt(value, 10);
					const isValid = Number.isInteger(start) && start <= activeAnnotation.end;
					if (isValid) updateAnnotation({ start });
					return isValid ? { isValid } : { isValid, message: "The start point cannot be greater than the end point." };
				}}
				value={value}
			/>
		)
	}
}

export default Start;