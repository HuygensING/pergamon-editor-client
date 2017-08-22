import * as React from 'react';
import styled from "styled-components";
import {Head3} from "../../ui/index";

export const Columns = styled.ul`
	display: flex;	
	flex: 19;
	flex-direction: row;
`;

export const Column = styled.li`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 1vw;
`;

const Header = styled.header`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: row;
`;

const H3 = styled(Head3)`
	flex: 1;
`;

export const ColumnHeader = (props) =>
	<Header>
		<H3>{props.value}</H3>
		{props.children}
	</Header>;

export const ColumnBody = styled.div`
	flex: 9;
	overflow-x: hidden;
	overflow-y: auto;
	padding-right: 1vw;
`;
