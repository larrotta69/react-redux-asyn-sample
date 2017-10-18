import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FilterItem from './FilterItem'

const Filters = (props) => {
    const {filtersContent, currentFilter} = props
    return (
        <StyledFilters>
            <ul>
                {filtersContent.map((f) => {
                    const isCurrentFilter = currentFilter === f.name
                    return <FilterItem key={f.id} isCurrent={isCurrentFilter} {...f} />
                })}
            </ul>
        </StyledFilters>
    )
}
/*
    Filters Styles
*/

const StyledFilters = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        width: 90%;
        margin: 10px auto;
    }
`
/*
    Filters propTypes
*/
Filters.propTypes = {
    filtersContent: PropTypes.array,
    currentFilter: PropTypes.string,
}

export default Filters
