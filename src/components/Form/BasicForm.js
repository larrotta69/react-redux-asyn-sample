import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {colors} from '../../styles/variables'
import {media} from '../../styles/mixins'

const BasicForm = (props) => {
    const {onSubmit, children} = props
    return (
        <StyledForm onSubmit={onSubmit}>
            {children}
        </StyledForm>
    )
}
/*
    Form Styles
*/
const StyledForm = styled.form`
    padding: 15px;
    background-color: ${colors.mainPurple};

    ${media.medium`
        background-color: ${colors.mainGreen};
    `}
`
/*
    Form propTypes
*/
BasicForm.propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.node
}

export default BasicForm
