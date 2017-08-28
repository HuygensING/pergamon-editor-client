import * as md5 from 'md5';
import * as uuidv4 from 'uuid/v4';
import {byDisplayStartEnd, byRowStartEnd} from "./sort";
import {splitAnnotations} from "./split-annotations";
import toTree from "./to-tree";
import {IAnnotation, SourceType} from "../documents";
import {addRow} from "./add-row";
import fillGaps from "./fill-gaps";

const orderAnnotations = (annotations) =>
	annotations
		.sort(byDisplayStartEnd)
		.map(addRow())
		.sort(byRowStartEnd)
		.reduce(splitAnnotations(), [])
		.map(addRow())
		.sort(byRowStartEnd)
		.reduce(toTree, []);

const addGaps = (root) => {
	if (root.hasOwnProperty('children')) {
		root.children = root.children
			.reduce(fillGaps(root), [])
			.map(addGaps);
	}
	return root;
};

const treeCache = {};
export const getTree = (id: string, text: string, annotations: IAnnotation[]): IAnnotation => {
	const annotationString = JSON.stringify(annotations);
	const hash = md5(`${id}|||${text}|||${annotationString}`);
	if (treeCache.hasOwnProperty(hash)) {
		return treeCache[hash];
	}	else {
		const children = orderAnnotations(JSON.parse(annotationString));
		const rootAnnotation = ({
			children,
			end: text.length,
			id: uuidv4(),
			source: 'system' as SourceType,
			start: 0,
			target: null,
			type: 'doc',
		});
		const withGaps = addGaps(rootAnnotation);
		treeCache[hash] = withGaps;
		return withGaps;
	}
};
