import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

function Menü({ onMenüButtonClick }) {
  return (
    <Wrapper>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/"
        activeclassname="active"
      >
        VITA
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/dokumentarfilm"
        activeclassname="active"
      >
        DOKUMENTARFILM
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/medienpaedgogik"
        activeclassname="active"
      >
        MEDIENPÄDAGOGIK
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/kamera"
        activeclassname="active"
      >
        KAMERA
      </NavigationLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--primary-color);
  position: absolute;
  left: 220px;
  top: 50px;
  display: flex;
  flex-direction: column;
  z-index: 30;
  animation-duration: 0.5s;
  animation-name: slideIn;
  &.active {
    @keyframes slideIn {
      from {
        transform: translatex(100px);
      }

      to {
        transform: translateY(0);
      }
    }
  }
`;

const NavigationLink = styled(NavLink)`
  padding-right: 10px;
  margin: 3px;
  text-decoration: none;
  font-family: var(--hl-font)
  font-weight: 400;
  font-size: 1rem;
  color: black;
  &.active {
    text-decoration: underline;
  }
`;

export default Menü;
