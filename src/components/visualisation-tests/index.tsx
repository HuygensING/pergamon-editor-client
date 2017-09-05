import * as React from 'react';
import {Link} from "react-router-dom";
import Map from './map';
import SmallGraph from './small-graph';
import BigGraph from './big-graph';
import TimelineTest from "./timeline";

const VisualisationTests = (props) =>
	<div style={{display: 'flex', flex: 9, flexDirection: 'row'}}>
		<div style={{flex: 1}}>
			<ul>
				<li><Link to="/visualisation-tests/map">map</Link></li>
				<li><Link to="/visualisation-tests/timeline">timeline</Link></li>
				<li><Link to="/visualisation-tests/small-graph">small graph</Link></li>
				<li><Link to="/visualisation-tests/big-graph">big graph</Link></li>
			</ul>
		</div>
		<div style={{flex: 9}}>
			{
				props.match.params.type === 'map' &&
				<Map />	
			}
			{
				props.match.params.type === 'timeline' &&
				<TimelineTest />
			}
			{
				props.match.params.type === 'small-graph' &&
				<SmallGraph />
			}
			{
				props.match.params.type === 'big-graph' &&
				<BigGraph />
			}
		</div>
	</div>

export default VisualisationTests;
