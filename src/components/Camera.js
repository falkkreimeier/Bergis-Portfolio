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

function Camera() {
  return (
    <Wrapper>
      <h2>Kurzfilm: Ich auch</h2>
      <p>Netter Text zum Projekt. Maximal 5 Zeilen</p>
      <div>
        <Image src={ImageImg1} alt="" />
      </div>
      <div>
        <Image src={ImageImg2} alt="" />
      </div>
      <div>
        <Image src={ImageImg3} alt="" />
      </div>
      <div>
        <Image src={ImageImg4} alt="" />
      </div>
      <div>
        <Image src={ImageImg5} alt="" />
      </div>
      <div>
        <Image src={ImageImg6} alt="" />
      </div>
      <div>
        <Image src={ImageImg7} alt="" />
      </div>
      <h2>Kurzfilm: Helden der Großstadt</h2>
      <p>Netter Text zum Projekt. Maximal 5 Zeilen</p>
      <div>
        <Image src={ImageImg8} alt="" />
      </div>
      <div>
        <Image src={ImageImg9} alt="" />
      </div>
      <div>
        <Image src={ImageImg11} alt="" />
      </div>
      <div>
        <Image src={ImageImg12} alt="" />
      </div>
      <div>
        <Image src={ImageImg13} alt="" />
      </div>
      <div>
        <Image src={ImageImg14} alt="" />
      </div>
      <div>
        <Image src={ImageImg15} alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Image = styled.img`
  width: 375px;
  object-fit: contain;
  margin: 10px auto;
`;

export default Camera;
