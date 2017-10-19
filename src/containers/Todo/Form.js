import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {todoUpdateCurrent, todoAdd} from './TodoFeatures'

import {colors} from '../../styles/variables'
import {media} from '../../styles/mixins'

const Form = (props) => {
    const {currentTodo, todoUpdateCurrent, todoAdd} = props
    const updateCurrentHandler = evt => {
        todoUpdateCurrent(evt.target.value)
    }
    const submitHandler = evt => {
        evt.preventDefault()
        todoAdd({
            id: Math.floor(Math.random() * (5000 - 5) + 5),
            task: props.currentTodo,
            done: false
        })
    }
    return (
        <StyledForm onSubmit={submitHandler}>
            <input type="text"
                onChange={updateCurrentHandler}
                value={currentTodo}
                placeholder="Insert task" />
        </StyledForm>
    )
}
/*
    Form Styles
*/
const StyledForm = styled.form`
    padding: 15px;
    background-color: ${colors.mainPurple};

    input {
        background: ${colors.secondPurple};
        border: none;
        padding: 15px 5px;
        width: 100%;
        border-radius: 5px;

        ${media.medium`
            background-color: ${colors.secondGreen};
        `}
    }

    ${media.medium`
        background-color: ${colors.mainGreen};
    `}
`
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
