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
