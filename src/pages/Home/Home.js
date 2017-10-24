import React from 'react'
import PropTypes from 'prop-types'

import App from '../App/App'
import TodoForm from './../../containers/Todo/TodoForm'
import TodoList from './../../containers/Todo/TodoList'
import Filters from './../../components/Filters/Filters'

import filterOptions from '../../api/filters'

const Home = (props) => {
    const {match} = props
    return (
        <App match={match}>
            <TodoForm />
            <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
            <TodoList currentFilter={match.params.filter} />
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
