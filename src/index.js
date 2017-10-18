import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch} from 'react-router-dom'

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import 'roboto-npm-webfont'

import {Provider} from 'react-redux'

import App from './pages/App/App'
import Error404 from './pages/Error/Error404'
import Layout from './pages/Layout/Layout'
import configureStore from './store'

(() => injectGlobal`
    ${styledNormalize}
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }
`)()

const Root = ({store}) => {
    return <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Layout exact path="/" component={App}/>
                <Layout path="/:filter" component={App}/>
                <Layout component={Error404} />
            </Switch>
        </BrowserRouter>
    </Provider>
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

const store = configureStore

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)
