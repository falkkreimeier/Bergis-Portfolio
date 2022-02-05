import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--mobile-width: 375px;
--mobile-height: 100%;

--primary-color: #F1E7DC;
--secondary-color1: #FFFFFF;
--tertiary-color:
--signal-color1: #4666FF;
--body-color: BLACK;

--hl-font: 'Roboto', sans-serif;
--main-font: 'Roboto', sans-serif;

}

html {
    box-sizing: border-box
}

* {
    box-sizing: inherit;
 }

 p {
    font-family: 'Roboto', sans-serif;
     line-height: 1.5;
     padding-left: 10px;
 }

 h2 {
     text-transform: uppercase;
     text-align: center;
     font-family: 'Roboto', sans-serif;
     letter-spacing: 0.8px;
 }

 body {
     background-color:  var(--body-color);
 }


`;

export default GlobalStyles;
