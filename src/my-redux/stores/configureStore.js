import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';


export default function configureStore(sagaMiddleware) {
    let store
    // if (__DEV__) {
    //     store = reactotron.createStore(rootReducer, applyMiddleware(sagaMiddleware));
    // } else {
    //     store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    // }

    store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    return store;
}