import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Text>Footer</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
`;

const Text = styled.p`
  text-align: center;
`;

export default Footer;
