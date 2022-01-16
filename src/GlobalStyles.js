import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--mobile-width: 375px;
--app-background: yellow;
--mobile-height: 100%;
--component-color: #efebdc;
--primary-color: #F1E7DC;
--secondary-color1: #FFFFFF;
--signal-color1: #F2C53D;
--body-color: black;
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
