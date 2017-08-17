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
	font-size: ${(props: IButton) => props.scale != null ? `${props.scale}em` : '1em'};	
	height: 1.5em;
	line-height: 1.5em;
	overflow: hidden;
	padding: 0 0.5em;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export default Button;
