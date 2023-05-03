import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// here you can create global style for this whole app
*,*::before,*::after,h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6 {
  display: inline-block;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`

export default GlobalStyle