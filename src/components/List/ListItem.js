import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledProps from 'styled-props'

import Checkbox from '../Form/Checkbox'

import {box} from '../../styles/mixins'
import {colors} from '../../styles/variables'



const ListItem = (props) => {
    const {done, task, id, removeHandler, updateHandler} = props
    const currentTodo = {id, task, done}

    const handleChangeCheckbox = currentTodo => {
        updateHandler(currentTodo)
    }

    const handleClickRemove = id => {
        removeHandler(id)
    }

    return <StyledListItem done={done}>
        <TaskItem done={done}>{task}</TaskItem>
        {id ?
            (<div>
                <Checkbox change={handleChangeCheckbox(currentTodo)} isChecked={done} />
                <RemoveItem onClick={handleClickRemove(id)}>✖</RemoveItem>
            </div>)
        : null}
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.white};
    width: 90%;
    margin: 10px auto;
    padding: 15px;
    ${box()}
`

const RemoveItem = styled.span`
    padding: 0 0 0 15px;
    font-size: 20px;
    margin-left: 15px;
    border-left: 1px solid ${colors.gray};
`

const TaskItem = styled.p`
    text-decoration: ${styledProps(stateStyles.textDecoration)};
    color: ${props => props.done ? 'orangered' : 'mediumseagreen'};
    transition: 0.5s color;
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
