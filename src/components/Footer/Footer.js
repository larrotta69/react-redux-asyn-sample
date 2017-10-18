import React from 'react'
import styled from 'styled-components'

import {colors} from '../../styles/mixins'

const Footer = () => {
    return (
        <StyledFooter />
    )
}
/*
    Footer Styles
*/
const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${colors.mainGreen};
`
export default Footer
