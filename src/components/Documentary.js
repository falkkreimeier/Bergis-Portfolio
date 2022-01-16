import styled from "styled-components/macro";

function Documentary(props) {
  return (
    <Wrapper>
      <Image src={props.image} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const Image = styled.img`
  height: 450px;
  margin: 10px auto;
`;

export default Documentary;
