import styled from "styled-components/macro";
import plakat1 from "../Assets/Plakate/Plakat1.jpg";
import plakat2 from "../Assets/Plakate/Plakat2.jpg";
import plakat3 from "../Assets/Plakate/Plakat3.jpg";
import plakat4 from "../Assets/Plakate/Plakat4.jpg";
import plakat5 from "../Assets/Plakate/Plakat5.jpg";
import plakat6 from "../Assets/Plakate/poster-kurzfilms-nenn-mich-nicht-bruder.jpg";

function Documentary() {
  return (
    <Wrapper>
      <div>
        <Image5 src={plakat6} alt="" />
      </div>
      <div>
        <Image5 src={plakat5} alt="" />
      </div>
      <div>
        <Image src={plakat1} alt="" />
      </div>
      <div>
        <Image src={plakat4} alt="" />
      </div>
      <div>
        <ImageShort src={plakat2} alt="" />
      </div>
      <div>
        <ImageShort src={plakat3} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageShort = styled.img`
  height: 490px;
  margin: 10px auto;
`;

const Image = styled.img`
  height: 450px;
  margin: 10px auto;
`;

const Image5 = styled.img`
  height: 475px;
  margin: 10px auto;
`;

export default Documentary;
