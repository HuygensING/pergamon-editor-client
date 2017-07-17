import * as React from 'react';
import {Input} from "../index";

class Start extends React.Component<any, any> {
	public state = {
		value: (this.props.start != null) ? this.props.start : '',
	};

	public render() {
		const { annotation, updateAnnotation } = this.props;
		const { value } = this.state;
		return (
			<Input
				onChange={value => {
					let start: number | string = parseInt(value, 10);
					if (Number.isNaN(start)) start = '';
					this.setState({value: start});
				}}
				validate={value => {
					const start: number = parseInt(value, 10);
					const isValid = Number.isInteger(start) && start <= annotation.end;
					if (isValid) updateAnnotation({ start });
					return isValid ? { isValid } : { isValid, message: "The start point cannot be greater than the end point." };
				}}
				value={value}
			/>
		)
	}
}

export default Start;