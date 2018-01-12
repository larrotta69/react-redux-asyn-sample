import React from 'react'

import Loader from './../components/Loader/Loader'
import Error from './../components/Error/Error'

export const WithLoading = Component => props => {
    const loaderEl = props.isLoaderOn && !props.isError && <Loader key="loader" /> // eslint-disable-line
    return [ <Component key="Comp" {...props} />, loaderEl ]
}

export const WithError = Component => props => {
    const errorEl = props.isError && <Error key="error" errorMsg={props.errorMsg} /> // eslint-disable-line
    return [ <Component key="Comp" {...props} />, errorEl ]
}
