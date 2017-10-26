import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledProps from 'styled-props'
import {onlyUpdateForKeys} from 'recompose'

import Checkbox from '../Form/Checkbox'

import {box} from '../../styles/mixins'
import {colors} from '../../styles/variables'

const handlerCurrying = (callback, arg = null) => () => {
    callback(arg)
}

const ListItem = (props) => {
    const {done, task, id, removeHandler, updateHandler} = props
    const currentTodo = {id, task, done}

    return <StyledListItem done={done}>
        <StyledTaskItem done={done}>{task}</StyledTaskItem>
        {id ?
            (<div>
                <Checkbox change={handlerCurrying(updateHandler, currentTodo)} isChecked={done} />
                <StyledRemoveItem onClick={handlerCurrying(removeHandler, id)}>✖</StyledRemoveItem>
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

const StyledRemoveItem = styled.span`
    cursor: pointer;
    padding: 0 0 0 15px;
    font-size: 20px;
    margin-left: 15px;
    border-left: 1px solid ${colors.gray};
`

const StyledTaskItem = styled.p`
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

export default onlyUpdateForKeys(['done'])(ListItem)
