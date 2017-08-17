import * as React from 'react';
import styled from "styled-components";
import UploadResponse from "./upload-response";
import Button from "../ui/button";

const Div = styled.div`
	flex: 1;
	padding: 1em;
`;

class Upload extends React.Component<any, any> {
	public state = {
		responses: [],
	};

	public render() {
		return (
			<Div>
				{
					this.state.responses.length === 0 &&
					<input
						multiple
						onChange={this.handleChange}
						type="file"
					/>
				}
				<ul>
				{
					this.state.responses.map((u, i) =>
						<UploadResponse
							key={i}
							{...u}
						/>
					)
				}
				</ul>
				{
					this.state.responses.length > 0 &&
					<Button
						onClick={this.handleButtonClick}
					>
						Done
					</Button>
				}
			</Div>
		);
	}

	private handleButtonClick = ev => {
		this.setState({ responses: [] });
	};

	private upload = (f) => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = async (ev: any) => {
			const teiText = ev.target.result;
			const response = await fetch(`/api/documents`, {
				body: teiText,
				headers: {
					'Content-Type': 'application/xml',
				},
				method: 'POST',
			});
			const feedback = await response.json();
			feedback.name = f.name;
			this.setState({
				responses: this.state.responses.concat(feedback)
			});
			resolve();
		};
		reader.readAsText(f);
	});

	private handleChange = async ev => {
		const promises = Array.from(ev.target.files).map((f: File) => this.upload(f));
		await Promise.all(promises);

		this.props.getDocumentIds(true);
	};
}

export default Upload;