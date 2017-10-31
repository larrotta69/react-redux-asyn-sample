/*
    Loader Actions
*/
export const LOADER = 'LOADER'
/*
    Loader Actions Creators
*/
export const toggleLoader = (isLoader) => {
    return {type: LOADER, isLoader}
}
/*
    Loader Reducer
*/
export const reducerLoader = (state = defaultState, action) => {
    switch (action.type) {
        case LOADER:
            return {...state, isLoaderOn: action.isLoader}
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
