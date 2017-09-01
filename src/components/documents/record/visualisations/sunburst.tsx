import * as React from 'react';
import * as d3 from 'd3';
import {orderAnnotations} from "../../../../reducers/utils/get-tree";
import toTree from "../../../../reducers/utils/to-tree";

const filterText = (root) => {
	if (root.hasOwnProperty('children')) {
		root.children = root.children
			.map(filterText)
			.filter(c => c != null)
	}

	return root.type === 'text' ? null : root;
};

class Sunburst extends React.Component<any, any> {
	public componentDidMount() {
		const annotationString = JSON.stringify(this.props.activeDocument.annotations);
		const activeDocumentTree = orderAnnotations(JSON.parse(annotationString)).reduce(toTree, [])[0];
		const filteredTree = filterText(activeDocumentTree);

		const svg = d3.select("svg");
		const vis = document.querySelector('svg.vis');
		const svgRect = vis.getBoundingClientRect();
		const g = svg.append("g").attr("transform", "translate(40,0)");
		var tree = d3.tree().size([svgRect.height, svgRect.height - 160]);
		const root = d3.hierarchy(filteredTree);
		tree(root);

		var link = g.selectAll(".link")
			.data(root.descendants().slice(1))
			.enter().append("path")
			.attr("class", "link")
			.attr("d", function(d: any) {
				return "M" + d.y + "," + d.x
					+ "C" + (d.parent.y) + "," + d.x
					+ " " + (d.parent.y) + "," + d.parent.x
					+ " " + d.parent.y + "," + d.parent.x;
			});

		var node = g.selectAll(".node")
			.data(root.descendants())
			.enter().append("g")
			.attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
			.attr("transform", function(d: any) { return "translate(" + d.y + "," + d.x + ")"; })

		node
			.append("circle")
			.attr("r", 3);

		node
			.append("text")
			.attr("dy", 3)
			.attr("x", function(d) { return d.children ? -8 : 8; })
			.style("text-anchor", function(d) { return d.children ? "end" : "start"; })
			.text(function(d) {
				return d.data.hasOwnProperty('type') ? d.data.type : 'root';
			});
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

export default Sunburst;
