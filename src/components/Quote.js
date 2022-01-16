import styled from "styled-components/macro";

function Quote() {
  return (
    <Wrapper>
      "
      <Headline>
        Eine Kamera schafft Distanz zu den Menschen, die sie betrachtet. Der
        Mensch dahinter hat zur Aufgabe diese aufzulösen.
      </Headline>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--tertiary-color);
  padding: 0 25px 0 25px;
`;

const Quotes = styled.p`
  display: inline;
  font-size: 2rem;
`;

const Headline = styled.p`
  font-family: var(--main-font);
  padding: 5px;
  font-size: 1rem;
  color: black;
`;

export default Quote;
