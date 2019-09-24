import { createGlobalStyle } from 'styled-components'

const fonts = {
  headerNormal: 'Gotham',
};

export const theme = {
  colours: {
    background: '#ffffff',
    title: 'palevioletred',
  },
  fonts: fonts,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colours.background} !important;
    text-align: center;
    font-family: sans-serif;
  }
  ul{
    list-style-type: none;
  }
  button{
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: white;
    color: palevioletred;
    font-weight: bold;
    
  }
  button:hover{
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: palevioletred;
    color: white;
  }
  textarea{
    display: block;
    border: 2px solid palevioletred;
    border-radius: 3px;
    min-height: 100px;
    min-width: 300px;
    margin-bottom: 1em;
  }
  div{
    text-align:center;
    display:block;
  }
`