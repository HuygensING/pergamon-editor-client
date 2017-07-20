import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import annotationPathReducer from './annotation-path';
import documentTextEventsReducer from './document-text-events';
import documentsReducer from './documents';
import rootReducer from './root';

export default combineReducers({
	annotationPath: annotationPathReducer,
	documents: documentsReducer,
	documentTextEvents: documentTextEventsReducer,
	root: rootReducer,
	router: routerReducer
});
