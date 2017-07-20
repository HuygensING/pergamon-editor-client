import * as md5 from 'md5';
import {addRow, byDisplayStartEnd, byRowStartEnd} from "../components/doc/utils";
import {splitAnnotations} from "../components/doc/split-annotations";
import toTree from "../components/doc/create-tree";
import {IAnnotation} from "./documents";

const createTree = (text: string, annotations: IAnnotation[]): IAnnotation =>
	({
		start: 0,
		end: text.length,
		id: 'some-random-tree-id',
		type: 'doc',
		children: annotations
			.sort(byDisplayStartEnd)
			.map(addRow())
			.sort(byRowStartEnd)
			.reduce(splitAnnotations(), [])
			.map(addRow())
			.sort(byRowStartEnd)
			.reduce(toTree, []),
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
