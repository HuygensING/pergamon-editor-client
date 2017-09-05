import * as React from 'react';
import * as d3 from 'd3';
import {SYSTEM_TEXT_TYPE} from "../../../../constants";

const filterText = (root) => {
	if (root.hasOwnProperty('children')) {
		root.children = root.children
			.map(filterText)
			.filter(c => c != null);
	}

	return root.type === SYSTEM_TEXT_TYPE ? null : root;
};

const update = (props) => {
	const {activateAnnotation, activeDocument, filterSystemText} = props;

	const myTree = JSON.stringify(activeDocument.tree);
	const documentTree = filterSystemText ?
		filterText(JSON.parse(myTree)) :
		activeDocument.tree;

	const svg = d3.select("svg.vis");
	svg.html('')
	d3.select('#tooltip').remove();
	const svgNode = svg.node() as Element;
	const svgRect = svgNode.getBoundingClientRect();
	const g = svg.append("g").attr("transform", "translate(40,0)");
	var tree = d3.tree().size([svgRect.height, svgRect.height - 160]);
	const root = d3.hierarchy(documentTree);
	tree(root);

	const tooltip = d3.select('body').append('div')
		.attr('id', 'tooltip')
		.style('opacity', 0);


	var link = g.selectAll(".link")
		.data(root.descendants().slice(1))
		.enter().append("path")
		.attr("class", "link")
		.attr("d", function (d: any) {
			return "M" + d.y + "," + d.x
				+ "C" + (d.parent.y) + "," + d.x
				+ " " + (d.parent.y) + "," + d.parent.x
				+ " " + d.parent.y + "," + d.parent.x;
		});

	var node = g.selectAll(".node")
		.data(root.descendants())
		.enter().append("g")
		.attr("class", function (d) {
			return "node" + (d.children ? " node--internal" : " node--leaf");
		})
		.attr("transform", function (d: any) {
			return "translate(" + d.y + "," + d.x + ")";
		})
		.on('mouseover', (d) => {
			tooltip.transition().duration(200).style('opacity', 1);
			const html = {
				...{ text: activeDocument.text.slice(d.data.start, d.data.end)},
				...d.data.attributes
			};
			delete html.xmlns;
			tooltip
				.html(JSON.stringify(html))
				.style("left", (d3.event.pageX - 314) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		})
		.on("mouseout", function(d) {
			tooltip.transition()
				.duration(500)
				.style("opacity", 0);
		})
		.on('click', (d) => {
			activateAnnotation(d.data.id)
		});

	node
		.append("circle")
		.attr("r", (d) => {
			return d.children ? 2 + d.children.length : 2;
		});

	node
		.append("text")
		.attr("dy", 3)
		.attr("x", function (d) {
			return d.children ? -8 - d.children.length : 8;
		})
		.style("text-anchor", function (d) {
			return d.children ? "end" : "start";
		})
		.text(function (d) {
			return d.data.hasOwnProperty('type') ? d.data.type : 'root';
		});
}

class Tree extends React.Component<any, any> {
	public componentDidMount() {
		update(this.props);
	}

	componentWillReceiveProps(nextProps) {
		update(nextProps);
	}

	public render() {
		return (
			<svg
				className="vis"
				style={{flex: 1}}
			/>
		);
	}
}

export default Tree;
