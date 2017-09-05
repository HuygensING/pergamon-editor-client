import * as React from 'react';
import data from './data';
import Graph from "../graph";
const nodes = data.nodes.map((n: any, i: number) => {
	n.id = i;
	return n;
});

const links = data.links
	.map((l: any) => {
		l.value = l.w;
		return l;
	});

const BigGraph = () =>
	<Graph
		nodes={nodes}
		links={links}
		strength={-20}
		distance={20}
	/>;

export default BigGraph;