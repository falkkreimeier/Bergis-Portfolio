import styled from "styled-components/macro";
import QuoteImg from "../Assets/Quote.jpg";

function Quote() {
  return (
    <Wrapper>
      <Image src={QuoteImg} alt="" />
      {/* <Headline>
        Eine Kamera schafft Distanz zu den Menschen, die sie betrachtet. Der
        Mensch dahinter hat zur Aufgabe diese aufzulösen.
      </Headline> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--tertiary-color);
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
const Image = styled.img`
  height: 260px;
`;

export default Quote;
