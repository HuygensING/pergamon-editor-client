import * as React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import Home from './home';
import Standoff from './standoff';

import store from '../store';
import history from '../store/history';
import styled from "styled-components";

const App = styled.div`
	height: 100%;
`;

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<header>
					<h1>Pergamon client</h1>
				</header>
				<Route
					component={Home}
					exact
					path="/"
				/>
				<Route
					component={Standoff}
					path="/standoff"
				/>
			</App>
		</ConnectedRouter>
	</Provider>
);
