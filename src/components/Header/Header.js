import React from 'react'
import styled from 'styled-components'

import {colors} from '../../styles/variables'


const Header = () => {
    return (
        <StyledHeader />
    )
}
/*
    Header Styles
*/
const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${colors.mainGreen};
`
export default Header
