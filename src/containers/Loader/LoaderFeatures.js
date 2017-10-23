/*
    Loader Actions
*/
export const LOADER_ON = 'LOADER_ON'
export const LOADER_OFF = 'LOADER_OFF'
/*
    Loader Actions Creators
*/
export const setLoaderOn = () => {
    return {type: LOADER_ON}
}
export const setLoaderOff = () => {
    return {type: LOADER_OFF}
}
/*
    Loader Reducer
*/
export const reducerLoader = (state = defaultState, action) => {
    switch (action.type) {
        case LOADER_ON:
            return {...state, isLoaderOn: true, dan: 'dan'}
        case LOADER_OFF:
            return {...state, isLoaderOn: false}
        default:
            return state
    }
}
/*
    Loader defaultState
*/
const defaultState = {
    isLoaderOn: false
}
