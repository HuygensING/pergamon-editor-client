import * as md5 from 'md5';
import * as uuidv4 from 'uuid/v4';
import {byDisplayStartEnd, byRowStartEnd} from "./sort";
import {splitAnnotations} from "./split-annotations";
import toTree from "./to-tree";
import {IAnnotation, SourceType} from "../documents";
import {addRow} from "./add-row";
import fillGaps from "./fill-gaps";

export const orderAnnotations = (annotations) =>
	annotations
		.sort(byDisplayStartEnd)
		.map(addRow())
		.sort(byRowStartEnd)
		.reduce(splitAnnotations(), [])
		.map(addRow())
		.sort(byRowStartEnd)
		.map((a: IAnnotation) => {
			const suffix = a.hasOwnProperty('_first') ?
				'_first' :
				a.hasOwnProperty('_last') ?
					'_last' :
					a.hasOwnProperty('_segment') ?
						`_segment_${Math.round(Math.random() * 1000000)}` :
						'';

			a._tagId = `${a.id}__${a.type}${suffix}`;
			return a;
	});

const treeCache = {};
export const getTree = (id: string, text: string, annotations: IAnnotation[]): IAnnotation => {
	const annotationString = JSON.stringify(annotations);
	const hash = md5(`${id}|||${text}|||${annotationString}`);
	if (treeCache.hasOwnProperty(hash)) {
		return treeCache[hash];
	}	else {
		const children = orderAnnotations(JSON.parse(annotationString))
			.reduce(toTree, []);

		const rootAnnotation = ({
			children,
			end: text.length,
			id: uuidv4(),
			source: 'system' as SourceType,
			start: 0,
			target: null,
			type: 'doc',
		});
		const withGaps = fillGaps(rootAnnotation);
		treeCache[hash] = withGaps;
		return withGaps;
	}
};
