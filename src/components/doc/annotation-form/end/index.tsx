import * as React from 'react';
import {Input} from "../index";

class End extends React.Component<any, any> {
	public state = {
		value: (this.props.end) ? this.props.end : '',
	};

	public render() {
		const { annotation, updateAnnotation } = this.props;
		const { value } = this.state;
		return (
			<Input
				onChange={value => {
					let end: number | string = parseInt(value, 10);
					if (Number.isNaN(end)) end = '';
					this.setState({value: end});
				}}
				validate={value => {
					const end: number = parseInt(value, 10);
					const isValid = Number.isInteger(end) && annotation.start <= end;
					if (isValid) updateAnnotation({ end });
					return isValid ? { isValid } : { isValid, message: "The end point cannot be lower than the start point." };
				}}
				value={value}
			/>
		)
	}
}

export default End;