import { mediaQuery } from 'styled-media-queries'

export const colors = {
    mainGreen: '#17ba98',
    secondGreen: '#65c4ae',
    white: 'white',
    gray: '#eef3f6',
    lightGray: '#d2e1ea'
}

export const sizes = {
    medium: 768,
    large: 992,
    wide: 1200,
}

export const box = () => `
    border-radius: 5px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.09);
`

export const media = {
    smallOnly: mediaQuery`(max-width: ${(sizes.medium - 1) / 16}em)`,
    medium: mediaQuery`(min-width: ${sizes.medium / 16}em)`,
    large: mediaQuery`(min-width: ${sizes.large / 16}em)`,
    wide: mediaQuery`(min-width: ${sizes.wide / 16}em)`,
}
