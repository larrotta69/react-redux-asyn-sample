import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {todoRemove, todoUpdate, todosGet, filterTodo} from './TodoFeatures'
import ListItem from './../../components/List/ListItem'

class TodoList extends React.Component {
    componentWillMount(){
        console.log(this.props)
        if (!this.props.todosLoaded) {
            this.props.todosGet()
        }
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
TodoList.propTypes = {
    todos: PropTypes.array,
    todoRemove: PropTypes.func,
    todoUpdate: PropTypes.func,
    todosGet: PropTypes.func,
    currentFilter:  PropTypes.string,
}
export default connect(
    ({reducerTodo}, {currentFilter}) => ({todos: filterTodo(reducerTodo.todos, currentFilter), todosLoaded: reducerTodo.todosLoaded}),
    {todoRemove, todoUpdate, todosGet}
)(TodoList)
