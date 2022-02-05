import styled from "styled-components/macro";
import ImageImg1 from "../Assets/Medienpädagoge/LC_190213_3314(1).jpg";
import ImageImg2 from "../Assets/Medienpädagoge/LC_190213_3485(1).jpg";
import ImageImg3 from "../Assets/Medienpädagoge/logo(1).png";

function MediaEducation() {
  return (
    <Wrapper>
      <h2>Project Name</h2>
      <p>Netter Text über das Projekt max 5 Zeilen</p>
      <ImageContainer>
        <Image src={ImageImg3} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg1} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg2} alt="" />
      </ImageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 360px;
  margin: 5px auto;
  object-fit: contain;
`;

export default MediaEducation;
