import * as React from 'react';
import Timeline from 'timeline2';
import data from './data';
const events = data.map(d => ({
	date: new Date(d.date),
	title: `${d.sender} => ${d.recipient}`,
}));

const TimelineTest = () =>
	<Timeline
		events={events}
		root={{
			dateRange: {
				from: new Date('1600'),
				to: new Date('1650')
			},
			title: 'my root',
		}}
	/>;

export default TimelineTest;