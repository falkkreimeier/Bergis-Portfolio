import styled from "styled-components/macro";
import ImageImg11 from "../Assets/Helden der Großstadt Kamera/Bildschirmfoto 2018-09-12 um 22.22.27(1).png";
import ImageImg12 from "../Assets/Helden der Großstadt Kamera/Bildschirmfoto 2018-10-04 um 22.41.43(1).png";
import ImageImg9 from "../Assets/Helden der Großstadt Kamera/HDG_titel(1).jpg";
import ImageImg13 from "../Assets/Helden der Großstadt Kamera/HELDEN 02(1).jpg";
import ImageImg14 from "../Assets/Helden der Großstadt Kamera/HELDEN 04(1).jpg";
import ImageImg8 from "../Assets/Helden der Großstadt Kamera/MARCEL B(1).jpg";
import ImageImg15 from "../Assets/Helden der Großstadt Kamera/MARCEL WC(1).jpg";
import ImageImg2 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.13.34(1).png";
import ImageImg3 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.14.24(1).png";
import ImageImg4 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.15.48(1).png";
import ImageImg1 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.16.27(1).png";
import ImageImg5 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.27.07(1).png";
import ImageImg6 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.28.10(1).png";
import ImageImg7 from "../Assets/Ich auch Kamera/Bildschirmfoto 2021-10-19 um 10.29.42(1).png";
import ImageImg18 from "../Assets/Nenn mich nicht Bruder/ascheplatz-c2a9sebastian-bergfeld.jpg";
import ImageImg17 from "../Assets/Nenn mich nicht Bruder/cheyenne-c2a9sebastian-bergfeld(1).jpg";
import ImageImg16 from "../Assets/Nenn mich nicht Bruder/poster-kurzfilms-nenn-mich-nicht-bruder.jpg";

function Camera() {
  return (
    <Wrapper>
      <h2>Kurzfilm: Ich auch</h2>
      <p>Netter Text zum Projekt. Maximal 5 Zeilen</p>
      <ImageContainer>
        <Image src={ImageImg1} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg2} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg3} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg4} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg5} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg6} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg7} alt="" />
      </ImageContainer>
      <h2>Kurzfilm: Helden der Großstadt</h2>
      <p>Netter Text zum Projekt. Maximal 5 Zeilen</p>
      <ImageContainer>
        <Image src={ImageImg8} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg9} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg11} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg12} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg13} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg14} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg15} alt="" />
      </ImageContainer>
      <h2>Kurzfilm: Nenn mich nicht Bruder</h2>
      <p>Netter Text zum Projekt. Maximal 5 Zeilen</p>
      <ImageContainer>
        <Poster src={ImageImg16} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg17} alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src={ImageImg18} alt="" />
      </ImageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const ImageContainer = styled.div`
  display: flex;
`;

const Poster = styled.img`
  width: 360px;
  object-fit: cover;
  margin: 5px auto;
`;

const Image = styled.img`
  width: 360px;
  height: 200px;
  object-fit: cover;
  margin: 5px auto;
`;

export default Camera;
