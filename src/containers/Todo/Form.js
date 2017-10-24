import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {todoUpdateCurrent, todoAdd} from './TodoFeatures'

import Input from '../../components/Form/Input'
import BasicForm from '../../components/Form/BasicForm'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.currentTodo
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    onChangeHandler(evt) {
        const {value} = evt.target
        this.setState({
            value: value
        })
        this.props.todoUpdateCurrent(value)
    }
    submitHandler(evt) {
        evt.preventDefault()
        const {currentTodo, todoAdd} = this.props
        if (currentTodo !== ''){
            todoAdd({
                id: Math.floor(Math.random() * (5000 - 5) + 5),
                task: currentTodo,
                done: false
            })
        }
        this.setState({
            value: ''
        })
    }
    render(){
        const {value} = this.state
        return (
            <BasicForm onSubmit={this.submitHandler}>
                <Input type="text"
                    onChange={this.onChangeHandler}
                    value={value}
                    placeholder="Insert task" />
            </BasicForm>
        )
    }

}
/*
    Form propTypes
*/
Form.propTypes = {
    currentTodo: PropTypes.string,
    todoUpdateCurrent: PropTypes.func,
    todoAdd: PropTypes.func,
    value: PropTypes.string
}
export default connect(
    (state) => ({currentTodo: state.reducerTodo.currentTodo}),
    {todoUpdateCurrent, todoAdd}
)(Form)
