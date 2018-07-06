import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';



const enhancer = applyMiddleware(thunk);

function configureStore(initialState) {
	return createStore(rootReducer, initialState, enhancer);
}

export default configureStore;
