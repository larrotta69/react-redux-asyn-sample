import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {colors} from '../../styles/mixins'

const FilterItem = (props) => {
    return (
        <StyledFilterItem isCurrent={props.isCurrent}>
            <Link to={props.goTo}>
                {props.name}
            </Link>
        </StyledFilterItem>
    )
}
/*
    FilterItem Styles
*/
const StyledFilterItem = styled.li`
    margin: 0 10px;
    padding: 5px;
    cursor: pointer;
    ${props =>
        props.isCurrent ? activeStyles() : null
    }
    a {
        text-decoration: none;
        color: black;
    }
`
/*
    FilterItem propTypes
*/
const activeStyles = () => (`
    border: 1px solid ${colors.lightGray};
    border-radius: 5px;
    font-weight: bold;
`)
FilterItem.propTypes = {
    name: PropTypes.string,
    goTo: PropTypes.string,
    isCurrent: PropTypes.bool,
}

export default FilterItem
