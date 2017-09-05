import * as React from 'react';
import * as d3 from 'd3';

class Graph extends React.Component<any, any> {
	private simulation;

	public componentDidMount() {
		const svg = d3.select("#graph");
		const svgNode = svg.node() as Element;
		const svgRect = svgNode.getBoundingClientRect();
		const { height, width } = svgRect;

		const simulation = d3.forceSimulation(this.props.nodes)
			.force('charge', d3.forceManyBody().strength(this.props.strength))
			.force('link', d3.forceLink(this.props.links).distance(this.props.distance))
			.force('center', d3.forceCenter(width/2, height/2));

		const link = svg.append('g')
			.attr('class', 'links')
			.selectAll('line')
			.data(this.props.links)
			.enter().append('line')
			.attr('stroke-width',(d: any) => d.w/10 > 10 ? 10 : d.w/10)
			.attr('stroke',(d: any) => d.w/10 > 10 ? '#888' : '#bbb');

		const node = svg.append("g")
      .attr("class", "nodes")
			.selectAll("circle")
			.data(this.props.nodes)
			.enter().append("circle")
				.attr("r", 3)
				.attr("stroke", '#444');

		var label = svg.append('g')
			.attr('class', 'labels')
			.selectAll("text")
			.data(this.props.nodes)
			.enter().append("text")
			.text((d: any) => d.name)
			.style("fill", "#444")
			.style("font-family", "Arial")
			.style("font-size", 12);
		// label.call(drag);

		simulation
			.nodes(this.props.nodes)
			.on('tick', () => {
				link
					.attr("x1", (d: any) => {
						return d.source.x
					})
					.attr("y1", (d: any) => d.source.y)
					.attr("x2", (d: any) => d.target.x)
					.attr("y2", (d: any) => d.target.y);

        node
					.attr("cx", (d: any) =>
						d.x >= width ? width - 3 :
							d.x < 3 ? 3 : d.x
					)
					.attr("cy", (d: any) =>
						d.y >= height ? height - 3 :
							d.y < 3 ? 3 : d.y
					);


				label
					.attr("x", (d: any) =>
						d.x > width/2 ?  d.x + 8 : d.x - 8
					)
					.attr("y", (d: any) => d.y + 4)
					.style("text-anchor", (d: any) =>
						d.x > width/2 ?  'start' : "end"
					);
			});

		const dragstarted = (d) => {
			if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		};

		const dragged = (d) => {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		};

		const dragended = (d) => {
			if (!d3.event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		};

		const drag = d3.drag()
			.on("start", dragstarted)
			.on("drag", dragged)
			.on("end", dragended);

		node.call(drag);
		label.call(drag);
	}

	public render() {
		return (
			<svg
				id="graph"
				style={{
					width: '100%',
					height: '100%'
				}}
			/>
		)
	}
}

export default Graph;