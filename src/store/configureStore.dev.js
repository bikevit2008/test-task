import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger, thunk));



function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		enhancer);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}

export default configureStore;
