import { createGlobalStyle } from 'styled-components'

const fonts = {
  headerNormal: 'Gotham',
};

export const theme = {
  colours: {
    background: '#ffffff',
    title: '#000000',
  },
  fonts: fonts,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colours.background} !important;
  }
`