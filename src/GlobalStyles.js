import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--mobile-width: 375px;
--mobile-height: 100%;

--primary-color: #F1E7DC;
--secondary-color1: #FFFFFF;
--tertiary-color:
--signal-color1: #F2C53D;
--body-color: black;

--hl-font: 'Roboto', sans-serif;
--main-font: 'Roboto', sans-serif;

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

 h2 {
     letter-spacing: 0.8px;
 }

 body {
     background-color:  var(--body-color);
 }


`;

export default GlobalStyles;
