import React from 'react'
import PropTypes from 'prop-types'

import Page from '../Page/Page'
import TodoForm from './../../containers/Todo/TodoForm'
import TodoList from './../../containers/Todo/TodoList'
import Filters from './../../components/Filters/Filters'

import filterOptions from '../../api/filters'

const Home = (props) => {
    const {match} = props
    return (
        <Page match={match}>
            <TodoForm />
            <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
            <TodoList currentFilter={match.params.filter} />
        </Page>
    )
}
/*
    Home propTypes
*/
Home.propTypes = {
    match: PropTypes.object
}

export default Home
