import * as React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import Home from './home';
import Documents from './documents';
import DocumentRecord from './documents/record';

import store from '../store';
import history from '../store/history';
import styled from "styled-components";

import Messages, { addMessage } from 'hire-messages';
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
	height: 100%;
`;

const Header = styled.div`
	background: #CCC;
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
					Pergamon client
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
				{Messages}
			</App>
		</ConnectedRouter>
	</Provider>
);
