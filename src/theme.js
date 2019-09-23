import { createGlobalStyle } from 'styled-components'

const fonts = {
  headerNormal: 'Gotham',
};

export const theme = {
  colours: {
    background: 'black',
    title: 'white',
    subtitle: '#800080',
    body: 'black'
  },
  fonts: fonts,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colours.background} !important;
  }
`