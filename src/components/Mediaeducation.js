import styled from "styled-components/macro";
import ImageImg1 from "../Assets/Medienpädagoge/LC_190213_3314(1).jpg";
import ImageImg2 from "../Assets/Medienpädagoge/LC_190213_3485(1).jpg";
import ImageImg3 from "../Assets/Medienpädagoge/logo(1).png";

function MediaEducation() {
  return (
    <Wrapper>
      <div>
        <Image src={ImageImg3} alt="" />
      </div>
      <div>
        <Image src={ImageImg1} alt="" />
      </div>
      <div>
        <Image src={ImageImg2} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Image = styled.img`
  width: 375px;
  margin: 10px auto;
  object-fit: contain;
`;

export default MediaEducation;
