import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Error = (props) => {
    return (
        <StyledError>
            {props.errorMsg}
        </StyledError>
    )
}
/*
    Error Styles
*/
const StyledError = styled.div`
    position: fixed;
    background: red;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    padding: 10px;
    color: white;
`
/*
    Error propTypes
*/
Error.propTypes = {
    errorMsg: PropTypes.string
}

export default Error
