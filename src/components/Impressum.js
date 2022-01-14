import styled from "styled-components/macro";

function Impressum() {
  return (
    <Wrapper>
      <Text>Geiler Impressum Text</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Text = styled.p`
  font-family: var(--main-font);
  text-align: center;
`;

export default Impressum;
