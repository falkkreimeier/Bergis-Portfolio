import styled from "styled-components";
import { BiMenu as MenüImg } from "react-icons/bi";
import { IconContext } from "react-icons";
import Menü from "./Menü";

function Header({ showMenü, onMenüButtonClick }) {
  return (
    <HeaderEl>
      <Wrapper>
        {(() => {
          if (window.location.pathname === "/") {
            return <Headline>Dokumentarfilmer</Headline>;
          } else if (window.location.pathname === "/medienpaedagoge") {
            return <Headline>Medienpädgoge</Headline>;
          } else if (window.location.pathname === "/kamera") {
            return <Headline>Kameramann</Headline>;
          } else if (window.location.pathname === "/datenschutz") {
            return <Headline>Datenschutz</Headline>;
          } else if (window.location.pathname === "/impressum") {
            return <Headline>Impressum</Headline>;
          } else {
            return <Headline>Sebastian Bergfeld</Headline>;
          }
        })()}
        <IconPosition>
          <IconContext.Provider
            value={{
              size: "30px",
            }}
          >
            <MenüImg onClick={onMenüButtonClick} />
          </IconContext.Provider>
        </IconPosition>
        {showMenü ? <Menü onMenüButtonClick={onMenüButtonClick} /> : ""}
      </Wrapper>
    </HeaderEl>
  );
}

const HeaderEl = styled.header`
  background-color: var(--body-color);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
`;

const Wrapper = styled.section`
  width: var(--mobile-width);
  background-color: var(--primary-color);
  margin: 5px auto;
  height: 40px;
`;

const Headline = styled.h2`
  font-family: var(--hl-font);
  padding-top: 8px;
  font-weight: 700;
  text-align: center;
`;

const IconPosition = styled.div`
  left: 320px;
  bottom: 48px;
  position: relative;
`;

export default Header;
