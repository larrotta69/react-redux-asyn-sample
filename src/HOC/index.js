import React from 'react'

import Loader from './../components/Loader/Loader'
import Error from './../components/Error/Error'

export const WithLoading = Component => props => {
    return props.isLoaderOn && !props.isError ? <Loader /> : <Component {...props} /> // eslint-disable-line
}

export const WithError = Component => props => {
    const errorEl = props.isError ? <Error key="error" errorMsg={props.errorMsg} /> : null // eslint-disable-line
    return [ <Component key="Comp" {...props} />, errorEl ]
}
