import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Loader from '../../components/Loader/Loader'
import {errorReset} from './../../containers/Error/ErrorFeatures'

import Form from './../../containers/Todo/Form'
import List from './../../containers/Todo/List'
import Filters from './../../components/Filters/Filters'

import filterOptions from '../../api/filters'

class App extends React.Component {
    constructor(props){
        super(props)
        const {errorReset} = props
        this.state = {
            isLoading: false
        }
        errorReset()
    }
    componentWillReceiveProps(nextProps) {
        const { history, isError, match } = nextProps
        if (isError) {
            history.push('/404')
        }
        if(Object.getOwnPropertyNames(match.params).length === 0){
            this.setState({
                isLoading: !this.props.isLoaderOn
            })
        }

    }
    render() {
        const {isLoading} = this.state
        const {match} = this.props
        return (
            <StyledApp className="App">
                <Form />
                <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
                <List currentFilter={match.params.filter} />
                {isLoading ? <Loader /> : null}
            </StyledApp>
        )
    }
}
/*
App Styles
*/
const StyledApp = styled.main`
    max-width: 760px;
    margin: 0 auto;
    min-height: 100vh;
    background: #eef3f6;
    height: 100%;
    padding-bottom: 50px;
    position: relative;
`
/*
App propTypes
*/
App.propTypes = {
    todos: PropTypes.array,
    currentTodo: PropTypes.string,
    history: PropTypes.object,
    isError: PropTypes.bool,
    isLoaderOn: PropTypes.bool,
    errorReset: PropTypes.func,
    match: PropTypes.object
}


export default connect(
    (state) => ({
        isError: state.reducerError.isError,
        isLoaderOn: state.reducerLoader.isLoaderOn
    }),
    {errorReset}
)(App)
