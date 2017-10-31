import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects'

import {ERROR_ON} from '../../containers/Error/ErrorFeatures'
import {LOADER} from '../../containers/Loader/LoaderFeatures'

import {TODOS_GET, TODOS_GET_SUCCESS, TODO_ADD, TODO_REMOVE, TODO_UPDATE, } from './TodoFeatures'

import {getTodosAPI, addTodosAPI, removeTodoAPI, updateTodoAPI } from '../../api/Todo/TodosAPI'

export function* todoSagas() {
    yield all([
        getAllTodosCall(),
        addTodoCall(),
        removeTodoCall(),
        updateTodoCall(),
    ])
}
/*
    Get All Todos Sagas
*/
function* getAllTodosCall() {
    yield takeLatest(TODOS_GET, getAllTodos)
}
function* getAllTodos() {
    yield sagasOperation(function* () {
        const todos = yield call(getTodosAPI)
        yield put({type: TODOS_GET_SUCCESS, todos: todos})
    })
}
/*
    Add Todo Sagas
*/
function* addTodoCall() {
    yield takeEvery(TODO_ADD, addTodo)
}
function* addTodo(action) {
    yield sagasOperation(() =>
        call(addTodosAPI, action.todo)
    )
}
/*
    Remove Todo Sagas
*/
function* removeTodoCall() {
    yield takeEvery(TODO_REMOVE, removeTodo)
}
function* removeTodo(todo) {
    yield sagasOperation(() =>
        call(removeTodoAPI, todo.id)
    )
}
/*
    Update Todo Sagas
*/
function* updateTodoCall() {
    yield takeEvery(TODO_UPDATE, updateTodo)
}
function* updateTodo(action) {
    yield sagasOperation(() =>
        call(updateTodoAPI, action.todo)
    )
}
/*
    Operation Todo
*/
function* sagasOperation(operation) {
    try {
        yield put({type: LOADER, isLoader: true})
        yield operation()
        yield put({type: LOADER, isLoader: false})
    } catch (error) {
        yield put({type: ERROR_ON, errorMsg: `${error}`})
    }
}
