import * as React from 'react';
import Timeline from 'timeline';
import data from './data';
const events = data.map(d => ({
	date: new Date(d.date),
	title: `${d.sender} => ${d.recipient}`,
}));

const TimelineTest = () =>
	<Timeline
		events={events}
		resize={() => {}}
		root={{
			dateRange: {
				from: new Date('1550'),
				to: new Date('1700')
			},
			title: 'my root',
		}}
	/>;

export default TimelineTest;