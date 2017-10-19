import { generateMedia } from 'styled-media-query'

export const colors = {
    mainGreen: '#15a385',
    secondGreen: '#18ba97',
    mainPurple: '#8515a3',
    secondPurple: '#72128d',
    white: 'white',
    gray: '#eef3f6',
    lightGray: '#d2e1ea'
}

const mediaQuery = generateMedia({
  mobile: '768px',
  tablet: '992px',
  desktop: '1200',
})

export const box = () => `
    border-radius: 5px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.09);
`

export const media = {
    mobile: mediaQuery.lessThan('mobile'),
    medium: mediaQuery.greaterThan('mobile'),
    large: mediaQuery.greaterThan('tablet'),
    wide: mediaQuery.greaterThan('desktop'),
}
