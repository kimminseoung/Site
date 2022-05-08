import styled from "styled-components";
import Content from "./components/Content";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #212428;
`;
const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
`;
const Title = styled.div`
text-align: center;
padding: 50px 0;
color: #fff;
span {
  display: block;
  font-size: 14px;
  color: crimson;
  margin: 0;
  padding: 0;
}
h2 {
  font-size: 60px;
}
`;
const ProjectWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`;
function Project() {

  const data = [
    {
      id: 1,
      tag:["HTML","CSS","JavaScript"],
      name: "ToyApp",
      imgUrl: "1.png",
      text: "바닐라 자바스크립트로 제작한 반응형 Toy App입니다. 로컬스토리지를 사용하여 Todo리스트 저장 기능, 로그인 구현, 날씨 API 구현, 실시간 타이머 구현,랜덤 배경, 반응형으로 제작",
      githubUrl: "https://github.com/kimminseoung/ToyApp",
      webPage: "https://kimminseoung.github.io/ToyApp/",
    },
    {
      id: 2,
      tag:["HTML","CSS","JavaScript"],
      name: "ToyApp",
      imgUrl: "1.png",
      text: "바닐라 자바스크립트로 제작한 반응형 Toy App입니다. 로컬스토리지를 사용하여 Todo리스트 저장 기능, 로그인 구현, 날씨 API 구현, 실시간 타이머 구현,랜덤 배경, 반응형으로 제작",
      githubUrl: "https://github.com/kimminseoung/ToyApp",
      webPage: "https://kimminseoung.github.io/ToyApp/",
    },
    {
      id: 3,
      tag:["HTML","CSS","JavaScript"],
      name: "ToyApp",
      imgUrl: "1.png",
      text: "바닐라 자바스크립트로 제작한 반응형 Toy App입니다. 로컬스토리지를 사용하여 Todo리스트 저장 기능, 로그인 구현, 날씨 API 구현, 실시간 타이머 구현,랜덤 배경, 반응형으로 제작",
      githubUrl: "https://github.com/kimminseoung/ToyApp",
      webPage: "https://kimminseoung.github.io/ToyApp/",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
          <h2>My Portfolio</h2>
        </Title>
        <ProjectWrapper>
          {data.map(data => (
            <Content key={data.id} data={data} />
          ))}
        </ProjectWrapper>
      </Wrapper>
    </Container>
  );
}

export default Project;
