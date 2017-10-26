import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import {errorReset} from './../../containers/Error/ErrorFeatures'

import {colors} from '../../styles/variables'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            isError: false
        }
    }
    componentWillMount(){
        const {errorReset} = this.props
        errorReset()
    }
    componentWillReceiveProps(nextProps) {
        const {isError, isLoaderOn} = nextProps
        if (isError) {
            this.setState({
                isError: true
            })
        }
        this.setState({
            isLoading: isLoaderOn
        })

    }
    render() {
        const {isLoading, isError} = this.state
        const {errorMsg} = this.props
        console.log('da')
        return (
            <StyledApp>
                {this.props.children}
                {isLoading ? <Loader /> : null}
                {isError ? <Error errorMsg={errorMsg}/> : null}
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
    background: ${colors.gray};
    height: 100%;
    padding-bottom: 50px;
    position: relative;
`
/*
App propTypes
*/
App.propTypes = {
    isError: PropTypes.bool,
    isLoaderOn: PropTypes.bool,
    errorReset: PropTypes.func,
    match: PropTypes.object,
    children: PropTypes.node,
    errorMsg: PropTypes.string
}


export default connect(
    ({reducerError, reducerLoader}) => ({
        isError: reducerError.isError,
        errorMsg: reducerError.errorMsg,
        isLoaderOn: reducerLoader.isLoaderOn
    }),
    {errorReset}
)(App)
