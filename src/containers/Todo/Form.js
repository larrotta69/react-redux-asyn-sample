import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {todoUpdateCurrent, todoAdd} from './TodoFeatures'

import Input from '../../components/Form/Input'
import BasicForm from '../../components/Form/BasicForm'

const Form = (props) => {
    const {currentTodo, todoUpdateCurrent, todoAdd} = props
    const updateCurrentHandler = evt => {
        todoUpdateCurrent(evt.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        todoAdd({
            id: Math.floor(Math.random() * (5000 - 5) + 5),
            task: props.currentTodo,
            done: false
        })
    }
    return (
        <BasicForm onSubmit={submitHandler}>
            <Input type="text"
                onChange={updateCurrentHandler}
                value={currentTodo}
                placeholder="Insert task" />
        </BasicForm>
    )
}
/*
    Form propTypes
*/
Form.propTypes = {
    currentTodo: PropTypes.string,
    todoUpdateCurrent: PropTypes.func,
    todoAdd: PropTypes.func,
}
export default connect(
    (state) => ({currentTodo: state.reducerTodo.currentTodo, todos: state.reducerTodo.todos}),
    {todoUpdateCurrent, todoAdd}
)(Form)
