import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {todoRemove, todoUpdate, todosGet, filterTodo} from './TodoFeatures'
import ListItem from './../../components/List/ListItem'

class List extends React.Component {
    constructor(props){
        super(props)
        props.todosGet()
    }
    render() {
        const {todos, todoRemove, todoUpdate} = this.props
        return (
            <ol>
                {todos && todos.length ?
                    todos.map(todo => (
                        <ListItem className="todo-list" key={todo.id}
                            {...todo}
                            removeHandler={todoRemove}
                            updateHandler={todoUpdate}
                        />))
                : <ListItem task="No Results" />}
            </ol>)
    }
}
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
