import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as modules from './modules';
import rootSaga from './sagas';

const reducer = combineReducers(modules);

const configureStore = (preloadState?: Record<string, object>): Store => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        preloadState,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
