import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {colors} from '../../styles/variables'
import {media} from '../../styles/mixins'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const {onChange} = this.props
        onChange(e)
    }
    render(){
        const {type, placeholder} = this.props
        const {value} = this.state
        return (
            <StyledInput type={type}
                onChange={this.handleChange}
                value={value}
                placeholder={placeholder}
            />
        )
    }
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
