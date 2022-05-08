import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  h1 {
    padding-top: 130px;
    span {
      display: block;
      line-height: 170%;
      &:last-child {
        font-size: 20px;
      }
    }
  }
`;
function Intro() {
  return (
    <Container>
      <h1>
        welcome to my <span>portfolio</span>
        <span>
          안녕하세요. 저의 포트폴리오에 오신 것을 환영합니다.
          <br />
          프론트엔드 개발자를 꿈꾸며 준비한 작업들과 제 노력의 결과물을 보실 수
          있습니다.
          <br />
          편안하게 보시며 즐겨주세요. 감사합니다 :)
        </span>
      </h1>
    </Container>
  );
}

export default Intro;
