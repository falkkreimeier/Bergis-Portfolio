import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

function Menü({ onMenüButtonClick }) {
  return (
    <Wrapper>
      <Text>Inhalt</Text>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/"
        activeclassname="active"
      >
        DOKUMENTARFILMER
      </NavigationLink>
      <NavigationLink
        onClick={onMenüButtonClick}
        to="/medienpaedagoge"
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
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--primary-color);
  padding: 10px 30px;
  position: relative;
  width: 220px;
  height: 230px;
  left: 155px;
  bottom: 38px;
  display: flex;
  flex-direction: column;
  z-index: 30;
`;

const Text = styled.h2`
  font-family: var(--hl-font);
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-family: var(--hl-font)
  font-weight: 400;
  font-size: 0.9rem;
  color: black;
  font-family: var(--hl-font);
  font-size: 0.9rem;
  margin-bottom: 10px;
  padding: 5px;
  width: 170px;
  margin-bottom: 5px;    
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  color: #482307;
  column-gap: 1rem;
  cursor: pointer;
  outline: 2px solid transparent;
  text-transform: none;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
    0px 2px 2px rgba(81, 41, 10, 0.2);
  }
  &.active {
    text-decoration: underline;
  }
`;

export default Menü;
