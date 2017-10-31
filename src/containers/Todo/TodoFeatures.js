/*
    Todo Actions
*/
export const TODO_UPDATE_CURRENT = 'TODO_UPDATE_CURRENT'
export const TODO_ADD = 'TODO_ADD'
export const TODO_REMOVE = 'TODO_REMOVE'
export const TODO_UPDATE = 'TODO_UPDATE'
export const TODOS_GET = 'TODOS_GET'
export const TODOS_GET_SUCCESS = 'TODO_GET_SUCCESS'
/*
    Todo Actions Creators
*/
export const todosGet = todos => (
    {type: TODOS_GET, todos}
)
export const todoUpdateCurrent = currentTodo => (
    {type: TODO_UPDATE_CURRENT, currentTodo}
)
export const todoAdd = todo => {
    return {type: TODO_ADD, todo}
}
export const todoRemove = id => (
    {type: TODO_REMOVE, id}
)
export const todoUpdate = currentTodo => {
    const todo = {...currentTodo, done: !currentTodo.done }
    return {type: TODO_UPDATE, todo}
}
/*
    Todo Reducer
*/
export const reducerTodo = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_ADD: {
            return {...state, todos: [action.todo, ...state.todos], currentTodo: ''}
        }
        case TODO_REMOVE:
            return {...state,
                todos: state.todos.filter(t => t.id !== action.id)}
        case TODO_UPDATE: {
            const todos = state.todos.map(t =>
                t.id === action.todo.id ? action.todo : t
            )
            return {...state, todos}
            }
        case TODO_UPDATE_CURRENT:
            return {...state, currentTodo: action.currentTodo}
        case TODOS_GET_SUCCESS:
            action.todos.reverse()
            return {...state, todos: action.todos, todosLoaded: true}
        case TODOS_GET: default:
            return state
    }
}
/*
    Todo Filter
*/
export const filterTodo = (todos, filter = 'all') => {
    switch (filter) {
        case 'active':
            return todos ? todos.filter(t => !t.done) : null
        case 'completed':
            return todos ? todos.filter(t => t.done) : null
        default:
            return todos
    }
}
/*
    Todo defaultState
*/
const defaultState = {
    currentTodo: '',
    todos: [],
    todosLoaded: false
}
