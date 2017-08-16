import * as React from 'react';
import styled from "styled-components";
import {debounceWait} from "../../../../constants";
import {ColumnHeader} from "../columns";

const ProgressBar = styled.div`
	background-color: rgba(255, 0, 0, 0.1);
	border: 1px solid red;
	flex: 1;
	height: 1em;
	position: relative;
`;

const Bar = styled.div`
	background-color: rgba(255, 0, 0, 0.3);
	border: 1px solid rgba(0, 0, 0, 0);
	bottom: 0;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const ProgressText = styled.div`
	font-size: 0.8em;
	position: absolute;
	text-align: center;
	top: 0;
	width: 100%;
`;

const TextHeader = (props) =>
	<ColumnHeader
		value="Text"
	>
		<ProgressBar>
			{
				props.requestStart != null &&
				<Bar style={{ width: `${props.percentage}%`}} />
			}
			{
				props.requestStart != null &&
				<ProgressText>
					Updating in {Math.floor(debounceWait - (debounceWait * (props.percentage / 100)))}ms
				</ProgressText>
			}
		</ProgressBar>
	</ColumnHeader>

export default TextHeader;
