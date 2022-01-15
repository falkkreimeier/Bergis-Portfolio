import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--mobile-width: 375px;
--app-background: yellow;
--mobile-height: 100%;
--component-color: #efebdc;
--primary-color: #F2F2F2;
--secondary-color3: #65858C;
--secondary-color4: #012E40;
--signal-color:  	#4d2847;
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
