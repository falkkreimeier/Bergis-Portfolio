import styled from "styled-components/macro";

function MediaEducation() {
  return (
    <Wrapper>
      <Text>Geiler Inhalt</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Text = styled.p`
  font-family: var(--main-font);
  text-align: center;
`;

export default MediaEducation;
