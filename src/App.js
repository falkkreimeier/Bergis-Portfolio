import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Vita from "./components/Vita";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Documentary from "./components/Documentary";
import Camera from "./components/Camera";
import Mediaeducation from "./components/Mediaeducation";
import { Routes, Route, useLocation } from "react-router-dom";
import data from "./data.json";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Vita />} />
          <Route
            path="/dokumentarfilm"
            element={data.poster.map((poster) => (
              <Documentary image={poster.image} key={poster.id} />
            ))}
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/medienpaedgogik" element={<Mediaeducation />} />
          <Route path="/kamera" element={<Camera />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </Main>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0px auto;
  background-color: var(--secondary-color1);
  width: var(--mobile-width);
  height: var(--mobile-height);
`;

const Main = styled.main`
  margin: 0 auto;
  padding: 53px 0;
  overflow: scroll;
`;

export default App;
