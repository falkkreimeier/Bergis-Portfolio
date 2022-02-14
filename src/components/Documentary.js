import styled from "styled-components/macro";
import plakat6 from "../Assets/Mama wollte nicht mehr leben/Mama wollte nicht mehr leben .jpg";
import plakat1 from "../Assets/Plakate/Plakat1.jpg";
import plakat2 from "../Assets/Plakate/Plakat2.jpg";
import plakat3 from "../Assets/Plakate/Plakat3.jpg";
import plakat4 from "../Assets/Plakate/Plakat4.jpg";
import plakat5 from "../Assets/Plakate/Plakat5.jpg";
import plakat7 from "../Assets/Spielen oder nicht spielen/SPielen oder nicht spielen.jpg";

function Documentary() {
  return (
    <Wrapper>
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
      <DokumentaryContainer>
        <Headline>Mama wollte nicht mehr leben</Headline>
        <Text>
          Reportage, 43 min, WDR Menschen hautnah, ausgestrahlt am 28.10.2021
          Regie (Kamera: Patrick Waldmann, Produktion: Wildfilms){" "}
        </Text>
        <div>
          <ImagePlakat src={plakat6} alt="" />
        </div>
      </DokumentaryContainer>
      <DokumentaryContainer>
        <Headline> Spielen oder nicht spielen</Headline>
        <Text>
          Dokumentarfilm, 90 min, Postproduktion Regie/Kamera: Kim Münster und
          Sebastian Bergfeld{" "}
        </Text>
        <div>
          <ImagePlakat src={plakat7} alt="" />
        </div>
      </DokumentaryContainer>
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

const ImagePlakat = styled.img`
  width: 325px;
`;

const Image5 = styled.img`
  height: 475px;
  margin: 15px auto;
`;

const Headline = styled.h2`
  margin: 20px auto 0 auto;
`;

const Text = styled.p`
  padding: 5px;
`;

const DokumentaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 17px;
`;

export default Documentary;
