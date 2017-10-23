/*
    Error Actions
*/
export const ERROR_ON = 'ERROR_ON'
export const ERROR_RESET = 'ERROR_RESET'
/*
    Error Actions Creators
*/
export const errorOn = errorMsg => {
    return {type: ERROR_ON, errorMsg}
}
export const errorReset = () => {
    return {type: ERROR_RESET}
}
/*
    Error Reducer
*/
export const reducerError = (state = defaultState, action) => {
    switch (action.type) {
        case ERROR_ON:
            return {...state, isError: true, errorMsg: action.errorMsg}
        case ERROR_RESET:
            return {...state, isError: false, errorMsg: ''}
        default:
            return state
    }
}
/*
    Error defaultState
*/
const defaultState = {
    error: '',
    isError: false
}
