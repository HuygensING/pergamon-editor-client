import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

declare global {
	interface Array<T> {
		last(): T;
		pickRandom(): T;
	}
}

Array.prototype.last = function () {
	return this[this.length - 1];
};

Array.prototype.pickRandom = function () {
	return this[Math.floor(Math.random() * this.length)];
};

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('container');
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		container
	);
});
