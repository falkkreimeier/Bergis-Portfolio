import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Vita from "./components/Vita";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Documentary from "./components/Documentary";
import Camera from "./components/Camera";
import Quote from "./components/Quote";
import Mediaeducation from "./components/Mediaeducation";
import { Routes, Route, useLocation } from "react-router-dom";
import data from "./data.json";
import { useEffect, useState } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [showMenü, setShowMenü] = useState(false);
  function MenüButtonClick() {
    setShowMenü(!showMenü);
  }

  function NaviButtonClick() {
    setShowMenü(false);
    console.log("clicked");
  }

  return (
    <Wrapper>
      <Header showMenü={showMenü} onMenüButtonClick={MenüButtonClick} />
      <Main onClick={NaviButtonClick}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Quote />
                <Documentary />
              </>
            }
          />
          <Route path="/medienpaedagoge" element={<Mediaeducation />} />
          <Route path="/kamera" element={<Camera />} />
          <Route path="/sebastianbergfeld" element={<Vita />} />
          <Route path="/impressum" element={<Impressum />} />s
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </Main>

      <Footer onNaviButtonClick={NaviButtonClick} />
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
  padding: 85px 0;
  overflow: scroll;
`;

export default App;
