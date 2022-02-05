import styled from "styled-components/macro";
import QuoteImg from "../Assets/Plakate/Quote.jpg";

function Quote() {
  return (
    <Wrapper>
      <Image src={QuoteImg} alt="" />
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
  height: 165px;
`;

export default Quote;
