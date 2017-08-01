import * as React from 'react';
import { connect } from 'react-redux';
import {getDocumentIds} from "../../actions/document-ids";
import {Link} from "react-router-dom";

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
			<ul>
				{
					this.props.documentIds.map(id =>
						<li key={id}>
							<Link to={`/documents/${id}`}>{id}</Link>
						</li>
					)
				}
			</ul>
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
