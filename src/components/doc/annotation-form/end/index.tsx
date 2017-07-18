import * as React from 'react';
import {Input} from "../index";
import {IAnnotation} from "../../../../reducers/documents";

interface IProps {
	activeAnnotation: IAnnotation;
	updateAnnotation: (any) => void;
	end: string;
}

interface IState {
	value: string;
}

class End extends React.Component<IProps, IState> {
	public state = {
		value: (this.props.end) ? this.props.end : '',
	};

	public componentWillReceiveProps(nextProps) {
		if (nextProps.end !== this.state.value)	{
			this.setState({ value: nextProps.end });
		}
	}

	public render() {
		const { activeAnnotation, updateAnnotation } = this.props;
		const { value } = this.state;
		return (
			<Input
				onChange={value => {
					let end: number | string = parseInt(value, 10);
					if (Number.isNaN(end)) end = '';
					this.setState({value: end.toString()});
				}}
				validate={value => {
					const end: number = parseInt(value, 10);
					const isValid = Number.isInteger(end) && activeAnnotation.start <= end;
					if (isValid) updateAnnotation({ end });
					return isValid ? { isValid } : { isValid, message: "The end point cannot be lower than the start point." };
				}}
				value={value}
			/>
		)
	}
}

export default End;