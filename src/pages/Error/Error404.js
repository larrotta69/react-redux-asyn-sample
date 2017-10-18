import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {colors} from '../../styles/mixins'

import Form from '../../containers/Todo/Form'

const Error404 = (props) => {
    return (
        <StyledError404>
            <h2>404 Error</h2>
            <button onClick={() => {
                props.history.push('/')
            }}>Back to Home</button>
            <Form/>
        </StyledError404>
    )
}
/*
    Error404 Styles
*/
const StyledError404 = styled.main`
    text-align: center;
    h2 {
        font-size: 50px;
        color: ${colors.mainGreen};
    }
    button {
        background: ${colors.mainGreen};
        border: none;
        color: white;
        border-radius: 5px;
        padding: 6px 15px;
        font-size: 20px;
        cursor: pointer;
    }
`
Error404.propTypes = {
    history: PropTypes.object
}
export default Error404
