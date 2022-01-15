import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--mobile-width: 375px;
--app-background: yellow;
--mobile-height: 100%;
--component-color: #efebdc;
--primary-color: #0F1226;
--secondary-color1: #426A8C;
--secondary-color2: #75B2BF;
--signal-color1: #69358C;
--signal-color2: #272559;
--body-color: #efebdc;
--main-font: 'Roboto', sans-serif;
--hl-font: 'Palanquin Dark', sans-serif;
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

 body {
     background-color:  var(--body-color);
 }


`;

export default GlobalStyles;
