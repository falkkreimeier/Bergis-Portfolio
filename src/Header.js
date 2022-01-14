import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <NavigationLink to="/" activeclassname="active">
        VITA
      </NavigationLink>
      <NavigationLink to="/dokumentarfilm" activeclassname="active">
        DOKUMENTARFILM
      </NavigationLink>
      <NavigationLink to="/medienpaedagogik" activeclassname="active">
        MEDIENPÄDAGOGIK
      </NavigationLink>
      <NavigationLink to="/kamera" activeclassname="active">
        KAMERA
      </NavigationLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -10px auto;
  height: 50px;
`;

const NavigationLink = styled(NavLink)`
  border-right: 1px solid black;
  padding-right: 10px;
  margin: 5px;
  text-decoration: none;
  font-size: 0.6rem;
  color: black;
  &.active {
    text-decoration: underline;
  }
  &:last-child {
    border: none;
  }
`;

export default Header;
