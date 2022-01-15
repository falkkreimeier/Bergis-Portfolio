import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <HeaderEl>
      <Wrapper>
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
  background-color: var(--secondary-color4);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  height: 30px;
`;

const NavigationLink = styled(NavLink)`
  border-right: 1px solid black;
  padding-right: 10px;
  margin: 3px;
  text-decoration: none;
  font-family: var(--hl-font)
  font-weight: 400;
  font-size: 0.7rem;
  color: white;
  &.active {
    text-decoration: underline;
  }
  &:last-child {
    border: none;
  }
`;

export default Header;
