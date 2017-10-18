import React from 'react'
import PropTypes from 'prop-types'
import { Route} from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

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

export default Layout
