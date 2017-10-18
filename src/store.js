import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import {todoSagas} from './containers/Todo/TodoSagas'
import {reducerTodo} from './containers/Todo/TodoFeatures'
import {reducerError} from './containers/Error/ErrorFeatures'
import {reducerLoader} from './containers/Loader/LoaderFeatures'

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
    reducerTodo,
    reducerError,
    reducerLoader
})

const configureStore = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(todoSagas)

export default configureStore
