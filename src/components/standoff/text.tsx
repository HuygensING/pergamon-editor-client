import * as React from 'react';
import {MyTextarea} from "./index";

class Text extends React.Component<any, any> {
	public render() {
		return (
			<div>
				<MyTextarea
					onChange={(text: string) => this.props.setDocText(text)}
					onMouseUp={this.props.createAnnotation}
					value={this.props.text}
				/>
			</div>
		);
	}
}

export default Text;
