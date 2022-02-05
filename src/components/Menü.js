import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

function Menü({ onMenüButtonClick }) {
  return (
    <Wrapper>
      {window.location.pathname === "/documentary" ? (
        <NavigationLinkActive
          onClick={onMenüButtonClick}
          to="/"
          activeclassname="active"
        >
          DOKUMENTARFILMER
        </NavigationLinkActive>
      ) : (
        <NavigationLink
          onClick={onMenüButtonClick}
          to="/"
          activeclassname="active"
        >
          DOKUMENTARFILMER
        </NavigationLink>
      )}
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
  padding: 20px 15px;
  position: relative;
  width: 220px;
  height: 228px;
  left: 155px;
  bottom: 38px;
  display: flex;
  flex-direction: column;
  z-index: 30;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-family: var(--hl-font)
  font-weight: 400;
  color: black;
  font-family: var(--hl-font);
  font-size: 0.9rem;
  margin-bottom: 7px;
  padding-top: 9px;
  text-align: center;
  width: 190px;   
  min-height: 35px; 
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  color: #482307;
  cursor: pointer;
  outline: 2px solid transparent;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
    0px 2px 2px rgba(81, 41, 10, 0.2);
  }
  &.active {
    opacity: 0.2;
  }
`;

const NavigationLinkActive = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: var(--hl-font);
  font-size: 0.9rem;
  margin-bottom: 5px;
  padding: 5px;
  width: 170px;
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  opacity: 0.2;
  cursor: pointer;
  outline: 2px solid transparent;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
    0px 2px 2px rgba(81, 41, 10, 0.2);
`;

export default Menü;
