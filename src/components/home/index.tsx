import * as React from 'react';
import {Link} from "react-router-dom";

export default (props) =>
	<div
		className="home"
		style={{
			flex: 9
		}}
	>
		<Link to="/documents">documents</Link><br />
		<Link to="/visualisation-tests">visualisations</Link>
	</div>;

