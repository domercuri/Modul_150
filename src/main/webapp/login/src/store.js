import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, 
    compose(middleware, 
        autoRehydrate()));
        persistStore(store);

export default store;
