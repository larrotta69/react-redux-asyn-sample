import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {colors} from '../../styles/variables'

const Checkbox = (props) => {
    const {isChecked, change} = props
    return <StyledCheckbox checked={isChecked} onChange={change} />
}
/*
    Checkbox Styles
*/
const StyledCheckbox = styled.input.attrs({
    type: "checkbox"
})`
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background: ${colors.mainGreen};
    border-radius: 50%;
    -webkit-appearance: none;

    &:after {
        content: '✓';
        font-size: ${props => props.checked ? 15 : 0}px;
        color: white;
        position: absolute;
        left: 4px;
        top: 2px;
    }
`
/*
    Checkbox propTypes
*/
Checkbox.propTypes = {
    isChecked: PropTypes.bool,
    change: PropTypes.func
}

export default Checkbox
