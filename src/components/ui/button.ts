import styled from "styled-components";

interface IButton {
	scale?: string;
}

const Button = styled.div`
	background: #EEE;
	border: 1px solid #DDD;
	border-radius: 3px;
	cursor: pointer;
	display: inline-block;
	font-size: ${(props: IButton) => props.scale + 'em'};	
	width: 1.5em;
	height: 1.5em;
	text-align: center;
	line-height: 1.5em;
`;

export default Button;
