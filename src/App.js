import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./Logo";
import Vita from "./Vita";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Vita />} />
        </Routes>
      </Main>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  background-color: var(--app-background);
  width: var(--mobile-width);
  height: var(--mobile-height);
`;

const Main = styled.main``;

export default App;
