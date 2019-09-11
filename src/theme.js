import { createGlobalStyle } from 'styled-components'

const fonts = {
  headerNormal: 'Gotham',
};

export const theme = {
  colours: {
    background: '#000000',
    title: '#FFFFFF',
  },
  fonts: fonts,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colours.background} !important;
    
  }

  li{
    list-style-type:none;
  }

  button{
    padding: 10px;
  }

  ul{
    padding-inline-start:0px;
  }

  textarea{
    height:150px;
    width:195px;
    resize:none;
    background:khaki;
    border:solid;
  }
`