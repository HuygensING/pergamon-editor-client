import * as React from 'react';
import styled from "styled-components";
import {orange} from "../../../constants";
import history from '../../../store/history';

const Ul = styled.ul`
	align-items: center;
	background: #DDD;
	display: flex;
	flex 1;
	padding: 0 1vw;
	margin: 0;
`;

interface ILi {
	active: boolean;
}

const Link = styled.li`
	flex: none;
		
	span {
		color: ${(props: ILi) =>
			props.active ?  orange : 'initial'
		};
		cursor: ${(props: ILi) =>
			props.active ? 'pointer' : 'default'
		};
		border-bottom: ${(props: ILi) =>
			props.active ? `1px solid ${orange}` : 'none'
		};
	}
	
	& + li:before {
		content: '>';
		padding: 0 1em;
	}
`;

const Menu = ({
	annotationsInPath,
	activeDocument,
	documents,
	goToChildDocument,
	root,
}) =>
	<Ul>
		<Link
			active
			onClick={() => history.push('/documents')}
		>
			<span>Documents</span>
		</Link>
		<Link
			active={annotationsInPath.length > 0}
			onClick={() => goToChildDocument(-1)}
		>
			<span>{root.id}</span>
		</Link>
		{
			annotationsInPath.map((a, i) =>
				<Link
					active={activeDocument.id !== a.documentId}
					key={i}
					onClick={() => goToChildDocument(i)}
				>
					<span>{a.type}</span>
				</Link>
			)
		}
	</Ul>;

export default Menu;
