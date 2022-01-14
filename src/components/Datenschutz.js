import styled from "styled-components/macro";

function Datenschutz() {
  return (
    <Wrapper>
      <Text>Geiler Datenschutz Text</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Text = styled.p`
  font-family: var(--main-font);
  text-align: center;
`;

export default Datenschutz;
