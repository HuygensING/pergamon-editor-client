import * as React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import Home from './home';
import Doc from './documents';

import store from '../store';
import history from '../store/history';
import styled from "styled-components";

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
					component={Doc}
					path="/documents/:id"
				/>
			</App>
		</ConnectedRouter>
	</Provider>
);
