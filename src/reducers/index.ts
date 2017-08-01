import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import annotationPathReducer from './annotation-path';
import documentIdsReducer from './document-ids';
import documentTextEventsReducer from './document-text-events';
import documentsReducer from './documents';
import rootReducer from './root';

export default combineReducers({
	annotationPath: annotationPathReducer,
	documentIds: documentIdsReducer,
	documents: documentsReducer,
	documentTextEvents: documentTextEventsReducer,
	root: rootReducer,
	router: routerReducer
});
