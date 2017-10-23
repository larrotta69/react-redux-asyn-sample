import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { Route} from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import {errorReset} from './../../containers/Error/ErrorFeatures'

const Layout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Header />
                <Component {...matchProps} />
                <Footer />
            </div>
        )} />
    )
}
/*
Layout propTypes
*/
Layout.propTypes = {
    component: PropTypes.func.isRequired
}

export default connect(
    (state) => ({
        isError: state.reducerError.isError,
        isLoaderOn: state.reducerLoader.isLoaderOn
    }),
    {errorReset}
)(Layout)
