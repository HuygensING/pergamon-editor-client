import * as React from 'react';
import data from './data';
import Graph from "../graph";
const nodes = data.nodes.map((n: any, i: number) => {
	n.id = i;
	return n;
}).slice(0, 10);

const links = data.links
	.map((l: any) => {
		l.value = l.w;
		return l;
	})
	.filter(l => {
		const source = nodes.find(n => n.id === l.source);
		const target = nodes.find(t => t.id === l.target);
		return source != null && target != null;
	});

const SmallGraph = () =>
	<Graph
		nodes={nodes}
		links={links}
		strength={-200}
		distance={200}
	/>;

export default SmallGraph;