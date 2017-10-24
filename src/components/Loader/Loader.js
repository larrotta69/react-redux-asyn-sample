import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <StyledLoader>
            <p>Loading...</p>
        </StyledLoader>
    )
}
/*
    Loader Styles
*/
const StyledLoader = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: red;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
`

export default Loader
