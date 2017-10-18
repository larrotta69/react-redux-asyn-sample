import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledProps from 'styled-props'

import Checkbox from '../Form/Checkbox'

const ListItem = (props) => {
    const {done, task, id, removeHandler, updateHandler} = props
    const currentTodo = {id, task, done}
    return <StyledListItem className="todo-list" done={done}>
        <p>{task}</p>
        <div className="todo-list-tools">
            <Checkbox change={() => updateHandler(currentTodo)} isChecked={done} />
            <span className="todo-list-remove" onClick={() => removeHandler(id)}>✖</span>
        </div>
    </StyledListItem>
}
/*
    ListItem Styles
*/
const stateStyles = {
    textDecoration: {
        done: 'line-through'
    }
}
const StyledListItem = styled.li`
    p{
        text-decoration: ${styledProps(stateStyles.textDecoration)};
        color: ${props => props.done ? 'orangered' : 'mediumseagreen'};
        transition: 0.5s color;
    }
`
/*
    ListItem propTypes
*/
ListItem.propTypes = {
    done: PropTypes.bool,
    task: PropTypes.string,
    id: PropTypes.number,
    removeHandler: PropTypes.func,
    updateHandler: PropTypes.func,
}

export default ListItem
