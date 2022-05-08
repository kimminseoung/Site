import styled from "styled-components";
import About from "./About";
import Project from './Project';
import Intro from "./Intro";
import Header from "./components/Header";
const Container = styled.div`
& > div {
  height: 100%;
  float: left;
}`;
const Box1 = styled.div`
  width: 250px;
  border: 1px solid #000;
  background-color: red;
`;
const Box2 = styled.div`
  width: calc(100% - 250px);
  overflow-y: scroll;
  background-color: #212428;
`;
function App() {
  return (
    <Container>
      <Box1>
        <Header/>
      </Box1>
      <Box2>
        <Intro></Intro>
        <About></About>
        <Project></Project>
      </Box2>
    </Container>   
  );
}

export default App;
