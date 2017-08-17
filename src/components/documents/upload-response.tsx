import * as React from 'react';
import {Head3} from "../ui/index";
import styled from "styled-components";

const Li = styled.li`
	margin: 1em 0;
`;

const H3 = styled(Head3)`
	&:before {
		color: ${(props: {success: boolean}) => props.success ? 'green' : 'red'};
		content: ${(props: {success: boolean}) => props.success ? '"✔"' : '"✘"'};
		padding-right: 0.5em;
	}	
`;

const Message = styled.div`
	background: red;
	color: white;
	padding: 1em;
`;

const UploadResponse = (props) =>
	<Li>
		<H3 success={props.status === 201}>{props.name}</H3>
		{
			props.status !== 201 &&
			<Message>{props.message}</Message>
		}
	</Li>;

export default UploadResponse;
