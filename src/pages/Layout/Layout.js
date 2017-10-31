import React from 'react'
import PropTypes from 'prop-types'

import {Route} from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Layout = ({component: Component, ...rest}) => {
    const handlerRender = (matchProps) => {
        return [
            <Header key="header" />,
            <Component key="main" {...matchProps} />,
            <Footer key="footer" />
        ]
    }
    return (
        <Route {...rest} render={handlerRender} />
    )
}
/*
Layout propTypes
*/
Layout.propTypes = {
    component: PropTypes.func.isRequired
}

export default Layout
