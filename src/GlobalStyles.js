import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--mobile-width: 375px;
--app-background: yellow;
--mobile-height: 100vh;
--component-color: #efebdc
;
}

html {
    box-sizing: border-box
}

* {
    box-sizing: inherit;
 }

 p {
     line-height: 1.5;
 }


`;

export default GlobalStyles;
