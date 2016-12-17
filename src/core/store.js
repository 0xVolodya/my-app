/**
 * Created by vladimir on 17.12.16.
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import reducer from './reducer';

export default function configureStore(){
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(sagaMiddleware);

    const store = createStore(reducer, middleware);
    sagaMiddleware.run(mySaga);

    return store;
}