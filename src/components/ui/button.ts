import styled from "styled-components";

export const buttonBackgroundColor = '#EEE';

interface IButton {
	bare?: boolean;
	scale?: string;
}

const Button = styled.div`
	background: ${(props: any) => props.bare ? 'none' : buttonBackgroundColor};
	border-radius: 3px;
	border: ${(props: any) => props.bare ? 'none' : '1px solid #DDD'};
	cursor: pointer;
	display: inline-block;
	font-size: ${(props: IButton) => props.scale + 'em'};	
	height: 1.5em;
	line-height: 1.5em;
	overflow: hidden;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 1.5em;
`;

export default Button;
