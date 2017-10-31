import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from 'recompose'

import TodoForm from './../../containers/Todo/TodoForm'
import TodoList from './../../containers/Todo/TodoList'
import Filters from './../../components/Filters/Filters'

import {WithError, WithLoading} from './../../HOC/index'

import filterOptions from '../../api/filters'

const Home = (props) => {
    const {match} = props
    return (
        <main>
            <TodoForm />
            <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
            <TodoList currentFilter={match.params.filter} />
        </main>
    )
}

/*
    Home propTypes
*/
Home.propTypes = {
    match: PropTypes.object
}

export default compose(connect(
    ({reducerLoader, reducerError}) => ({
        isError: reducerError.isError,
        errorMsg: reducerError.errorMsg,
        isLoaderOn: reducerLoader.isLoaderOn
    })),
    WithError,
    WithLoading
)(Home)
