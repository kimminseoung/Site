import styled from "styled-components";
import About from "./About";
import Project from './Project';
import Intro from "./Intro";
import Header from "./components/Header";
const Container = styled.div`
  background-color: #212428;
  & > div {
    /* padding-left: 280px; */
  }
`;

function App() {
  return (
    <>
      {/* <Header/> */}
      <Container>
        <Intro></Intro>
        <About></About>
        <Project></Project>
      </Container>   
    </>
  );
}

export default App;
