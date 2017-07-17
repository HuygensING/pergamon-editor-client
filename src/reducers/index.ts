// import annotation from './annotation';
// import annotationPath from './annotation-path';
// import document from './document';
// import documents from './documents';
// import root from './root';
//
// export default {
// 	annotation,
// 	annotationPath,
// 	document,
// 	documents,
// 	root
// };
// import {defaultDocument} from "./document";
import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import annotationPathReducer from './annotation-path';
import documentsReducer from './documents';
import rootReducer from './root';

export default combineReducers({
	annotationPath: annotationPathReducer,
	documents: documentsReducer,
	root: rootReducer,
	router: routerReducer
});
