import * as React from 'react';
import { connect } from 'react-redux';
import {getDocumentIds} from "../../actions/document-ids";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Upload from "./upload";

const Div = styled.div`
	display: flex;
	flex: 9;
`;
const Ul = styled.ul`
	flex: 1;
	overflow-y: auto;
	padding: 1em;
`;

interface IProps {
	documentIds: string[],
	getDocumentIds: () => void,
}

class Documents extends React.Component<IProps, null> {
	public componentDidMount() {
		this.props.getDocumentIds();
	}

	public render() {
		return (
			<Div>
				<Ul>
					{
						this.props.documentIds.map(id =>
							<li key={id}>
								<Link to={`/documents/${id}`}>{id}</Link>
							</li>
						)
					}
				</Ul>
				<Upload
					getDocumentIds={this.props.getDocumentIds}
				/>
			</Div>
		);
	}
}

export default connect(
	state => ({
		documentIds: state.documentIds,
	}),
	{
		getDocumentIds,
	}
)(Documents);
