import React from 'react'
import PropTypes from 'prop-types'

import App from '../App/App'
import Form from './../../containers/Todo/Form'
import List from './../../containers/Todo/List'
import Filters from './../../components/Filters/Filters'

import filterOptions from '../../api/filters'

const Home = (props) => {
    const {match} = props
    return (
        <App match={match}>
            <Form />
            <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
            <List currentFilter={match.params.filter} />
        </App>
    )
}
/*
    Home propTypes
*/
Home.propTypes = {
    match: PropTypes.object
}

export default Home
