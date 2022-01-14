import styled from "styled-components/macro";
import profile from "../Assets/Sebastian02.jpg";

function Vita() {
  return (
    <Wrapper>
      <QuoteContainer>
        <Quotes>"</Quotes>
        <Quote>
          Eine Kamera schafft Distanz zu den Menschen, die sie betrachtet. Der
          Mensch dahinter hat zur Aufgabe diese aufzulösen.
        </Quote>
      </QuoteContainer>
      <Image src={profile} alt="" />
      <Text>
        <b>Sebastian Bergfeld</b>(* 1979 in Haan) ist freier Dokumentarfilmer
        mit dem Schwerpunkt Kamera und Regie. Von 2005 bis 2012 studierte er an
        der FH Düsseldorf Sozialpädagogik und erlangte das Diplom mit seiner
        filmischen Abschlussarbeit über Geschwister von Menschen mit
        Behinderung. Seit 2009 arbeitet Sebastian Bergfeld als freier
        Mitarbeiter beim Medienprojekt Wuppertal e.V. in der Entwicklung und
        Realisierung von Dokumentarfilmen und leitet Filmworkshops für Kinder,
        Jugendliche und Menschen mit Behinderung. Seit Februar 2020 leitet er
        die Inklusive Filmredaktion „AugenBlicke“ in Wuppertal, bei der Menschen
        mit Behinderung ihre Ideen in Filme umsetzen können. Zudem arbeitet er
        an freien Dokumentarfilmprojekten und Kurzfilmen mit.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--component-color);
`;

const Image = styled.img`
  width: var(--mobile-width);
  margin-top: -130px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: black;
  padding: 10px;
`;

const QuoteContainer = styled.div`
  position: relative;
  bottom: 70px;
  left: 85px;
  height: 55px;
  width: 295px;
  background-color: black;
`;

const Quotes = styled.p`
  position: relative;
  bottom: 15px;
  padding-left: 5px;
  font-size: 4rem;
  color: white;
`;

const Quote = styled.p`
  margin-top: -155px;
  padding-left: 35px;
  font-size: 0.7rem;
  color: white;
`;

export default Vita;
