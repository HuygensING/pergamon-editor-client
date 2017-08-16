import * as md5 from 'md5';
import {byDisplayStartEnd, byRowStartEnd} from "./utils/sort";
import {splitAnnotations} from "./utils/split-annotations";
import toTree from "./utils/create-tree";
import {IAnnotation} from "./documents";
import {addRow} from "./utils/add-row";

const createTree = (text: string, annotations: IAnnotation[]): IAnnotation =>
	({
		children: annotations
			.sort(byDisplayStartEnd)
			.map(addRow())
			.sort(byRowStartEnd)
			.reduce(splitAnnotations(), [])
			.map(addRow())
			.sort(byRowStartEnd)
			.reduce(toTree, []),
		end: text.length,
		id: 'some-random-tree-id',
		source: 'system',
		start: 0,
		target: null,
		type: 'doc',
	});

const treeCache = {};
export const getTree = (id: string, text: string, annotations: IAnnotation[]): IAnnotation => {
	const annotationString = JSON.stringify(annotations);
	const hash = md5(`${id}|||${text}|||${annotationString}`);
	if (treeCache.hasOwnProperty(hash)) {
		return treeCache[hash];
	}	else {
		const clone = JSON.parse(annotationString);
		const tree = createTree(text, clone);
		treeCache[hash] = tree;
		return tree;
	}
};
