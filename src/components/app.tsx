import * as React from 'react';
import {Link, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import Home from './home';
import Documents from './documents';
import DocumentRecord from './documents/record';

import store from '../store';
import history from '../store/history';
import styled from "styled-components";

import Messages, { addMessage } from 'hire-messages';
import VisualisationTests from "./visualisation-tests";
// addMessage({
// 	type: 'error',
// 	value: 'This is a error',
// });
// addMessage({
// 	type: 'warning',
// 	value: 'This is a warning',
// });
// addMessage({
// 	type: 'success',
// 	value: 'OK, that\'s good!',
// });


const App = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Header = styled.header`
	background: #CCC;
	flex: 1;
	font-size: 2em;
	font-weight: bold;
	height: 8vh;
	line-height: 8vh;
	padding-left: 1vw;
`;

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Header>
					<Link to="/">Pergamon client</Link>
				</Header>
				<Route
					component={Home}
					exact
					path="/"
				/>
				<Route
					component={DocumentRecord}
					path="/documents/:id"
				/>
				<Route
					component={Documents}
					exact
					path="/documents"
				/>
				<Route
					component={VisualisationTests}
					exact
					path="/visualisation-tests"
				/>
				<Route
					component={VisualisationTests}
					path="/visualisation-tests/:type"
				/>
				{Messages}
			</App>
		</ConnectedRouter>
	</Provider>
);
