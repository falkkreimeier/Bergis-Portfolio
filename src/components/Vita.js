import styled from "styled-components/macro";
import profile from "../Assets/Plakate/Sebastian.jpg";

function Vita() {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={profile} alt="" />
      </ImageContainer>
      <Text>
        Sebastian Bergfeld(* 1979 in Haan) ist freier Dokumentarfilmer mit dem
        Schwerpunkt Kamera und Regie. Von 2005 bis 2012 studierte er an der FH
        Düsseldorf Sozialpädagogik und erlangte das Diplom mit seiner filmischen
        Abschlussarbeit über Geschwister von Menschen mit Behinderung. Seit 2009
        arbeitet Sebastian Bergfeld als freier Mitarbeiter beim Medienprojekt
        Wuppertal e.V. in der Entwicklung und Realisierung von Dokumentarfilmen
        und leitet Filmworkshops für Kinder, Jugendliche und Menschen mit
        Behinderung. Seit Februar 2020 leitet er die Inklusive Filmredaktion
        „AugenBlicke“ in Wuppertal, bei der Menschen mit Behinderung ihre Ideen
        in Filme umsetzen können. Zudem arbeitet er an freien
        Dokumentarfilmprojekten und Kurzfilmen mit.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  opacity: 0.9;
  background-color: var(--secondary-color3);
`;

const ImageContainer = styled.div`
  background-color: var(--secondary-color3);
`;

const Image = styled.img`
  width: 350px;
  margin-left: 13px;
  border-radius: 5px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-family: var(--main-font);
  color: black;
  padding: 10px;
  background-color: var(--secondary-color3);
  margin-left: 13px;
`;

export default Vita;
