import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {colors} from '../../styles/variables'
import {media} from '../../styles/mixins'

const Input = (props) => {
    const {value, type, placeholder, onChange} = props
    return (
        <StyledInput type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    )
}
/*
    Input Styles
*/
const StyledInput = styled.input`
    background: ${colors.secondPurple};
    border: none;
    padding: 15px 5px;
    width: 100%;
    border-radius: 5px;

    ${media.medium`
        background-color: ${colors.secondGreen};
    `}
`
/*
    Input propTypes
*/
Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string
}

export default Input
