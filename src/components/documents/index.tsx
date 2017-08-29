import * as React from 'react';
import { connect } from 'react-redux';
import {getDocumentIds} from "../../actions/document-ids";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Upload from "./upload";
import {Column, ColumnBody, ColumnHeader} from "./record/columns";
import Button from "../ui/button";

const Columns = styled.div`
	display: flex;
	flex: 9;
`;

const ColumnBodyUl = ColumnBody.withComponent('ul');

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
			<Columns>
				<Column>
					<ColumnHeader value="Documents">
						<div style={{ flex: 3 }}>
							<Button onClick={this.props.getDocumentIds}>⟳</Button>
						</div>
					</ColumnHeader>

					<ColumnBodyUl>
					{
						this.props.documentIds.map(id =>
							<li key={id}>
								<Link to={`/documents/${id}`}>{id}</Link>
							</li>
						)
					}
					</ColumnBodyUl>
				</Column>
				<Column>
					<ColumnHeader value="Upload" />
					<ColumnBody>
						<Upload
							getDocumentIds={this.props.getDocumentIds}
						/>
					</ColumnBody>
				</Column>
			</Columns>
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
