import * as React from 'react';
import styled from "styled-components";
import {orange} from "../../../constants";

const Wrapper = styled.div`
	background: #DDD;
	flex 1;
	padding: 0 1vw;
	margin: 0;
`;

const MenuItem = styled.div`
	display: inline-block;
`;

interface ILi {
	active: boolean;
}

const LiRoot = styled.li`
	display: inline-block;
	
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
`;

const Li = LiRoot.extend`
	&:before {
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
	<Wrapper>
		<MenuItem>
			<ul>
				<LiRoot
					active={annotationsInPath.length > 0}
				  onClick={() => goToChildDocument(-1)}
				>
					<span>{root.id}</span>
				</LiRoot>
			</ul>
		</MenuItem>
		<MenuItem>
			<ul>
				{
					annotationsInPath
						.map((a, i) =>
							<Li
								active={activeDocument.id !== a.documentId}
								key={i}
								onClick={() => goToChildDocument(i)}
							>
								<span>{a.type}</span>
							</Li>
						)
				}
			</ul>
		</MenuItem>
	</Wrapper>;

export default Menu;
