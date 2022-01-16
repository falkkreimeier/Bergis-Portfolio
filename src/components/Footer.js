import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Footer({ onNaviButtonClick }) {
  return (
    <FooterEl>
      <Wrapper>
        <Navigation onClick={onNaviButtonClick} to="/impressum">
          IMPRESSUM
        </Navigation>
        <Navigation onClick={onNaviButtonClick} to="/datenschutz">
          DATENSCHUTZ
        </Navigation>
      </Wrapper>
    </FooterEl>
  );
}

const FooterEl = styled.footer`
  background-color: var(--body-color);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Wrapper = styled.section`
  width: var(--mobile-width);
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

const Navigation = styled(NavLink)`
  border-right: 1px solid black;
  padding-right: 10px;
  text-decoration: none;
  font-family: var(--hl-font);
  font-size: 0.8rem;
  margin: 5px;
  color: black;
  &:last-child {
    border: none;
  }
`;

export default Footer;
