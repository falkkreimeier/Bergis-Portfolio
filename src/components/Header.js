import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <HeaderEl>
      <NavigationLink to="/" activeclassname="active">
        VITA
      </NavigationLink>
      <NavigationLink to="/dokumentarfilm" activeclassname="active">
        DOKUMENTARFILM
      </NavigationLink>
      <NavigationLink to="/medienpaedgogik" activeclassname="active">
        MEDIENPÄDAGOGIK
      </NavigationLink>
      <NavigationLink to="/kamera" activeclassname="active">
        KAMERA
      </NavigationLink>
    </HeaderEl>
  );
}

const HeaderEl = styled.header`
  width: var(--mobile-width);
  background-color: lightgrey;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -10px auto;
  height: 50px;
  z-index: 20;
`;

const NavigationLink = styled(NavLink)`
  border-right: 1px solid black;
  padding-right: 10px;
  margin: 3px;
  text-decoration: none;
  font-size: 0.7rem;
  color: black;
  &.active {
    text-decoration: underline;
  }
  &:last-child {
    border: none;
  }
`;

export default Header;
