import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

function Menü({ onMenüButtonClick }) {
  return (
    <Wrapper>
      <Text>Inhaltsverzeichnis</Text>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/"
        activeclassname="active"
      >
        DOKUMENTARFILMER
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/medienpaedgogik"
        activeclassname="active"
      >
        MEDIENPÄDAGOGE
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/kamera"
        activeclassname="active"
      >
        KAMERAMANN
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/sebastianbergfeld"
        activeclassname="active"
      >
        SEBASTIAN BERGFELD
      </NavigationLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 2px solid white;
  border-radius: 20px 0 0 20px;
  background-color: var(--primary-color);
  padding: 10px;
  position: relative;
  width: 220px;
  height: 250px;
  left: 77px;
  top: 150px;
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

const Text = styled.h2`
  font-family: var(--hl-font);
  font-size: 1.2rem;
  margin: 0;
`;

const NavigationLink = styled(NavLink)`
  padding-right: 10px;
  margin-top: 20px;
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
