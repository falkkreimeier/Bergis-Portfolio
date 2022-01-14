import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <FooterEl>
      <Navigation to="/impressum">IMPRESSUM</Navigation>
      <Navigation to="/datenschutz">DATENSCHUTZ</Navigation>
    </FooterEl>
  );
}

const FooterEl = styled.footer`
  width: var(--mobile-width);
  background-color: lightgrey;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Navigation = styled(NavLink)`
  border-right: 1px solid black;
  padding-right: 10px;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px;
  color: black;
  &:last-child {
    border: none;
  }
`;

export default Footer;
