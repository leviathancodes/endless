import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
}

body {
    font-family: 'Lato', sans-serif;
}

`;

export default GlobalStyle;