import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {todoRemove, todoUpdate, todosGet, filterTodo} from './TodoFeatures'
import ListItem from './../../components/List/ListItem'

import {box, colors} from '../../styles/mixins'

class List extends React.Component {
    constructor(props){
        super(props)
        props.todosGet()
    }
    render() {
        const {todos, todoRemove, todoUpdate} = this.props
        return todos ? (
            <StyledList>
                {todos.map(todo => (
                    <ListItem className="todo-list" key={todo.id}
                        {...todo}
                        removeHandler={todoRemove}
                        updateHandler={todoUpdate}
                    />
                ))}
            </StyledList>
        ) : null
    }
}
/*
List Styles
*/
const StyledList = styled.ol`
    list-style: none;
    padding: 0;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: ${colors.white};
        width: 90%;
        margin: 10px auto;
        padding: 15px;
        ${box()}
    }

    .todo-list-remove {
        padding: 0 0 0 15px;
        font-size: 20px;
        margin-left: 15px;
        border-left: 1px solid ${colors.gray};
    }
`
/*
List propTypes
*/
List.propTypes = {
    todos: PropTypes.array,
    todoRemove: PropTypes.func,
    todoUpdate: PropTypes.func,
    todosGet: PropTypes.func,
    currentFilter:  PropTypes.string,
}
export default connect(
    (state, ownProps) => ({todos: filterTodo(state.reducerTodo.todos, ownProps.currentFilter)}),
    {todoRemove, todoUpdate, todosGet}
)(List)
