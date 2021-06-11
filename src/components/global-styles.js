import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles
