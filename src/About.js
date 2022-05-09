import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const Wrapper=styled.div`
  width: 80%;
  height: 70%;
  font-family:'Noto Sans KR', sans-serif;
  display: flex;
`;
const Hello = styled.div`
  width: 35%;
  padding: 30px 30px 0px 20px;
  font-size: 80px;
  h3 {
    color: #7D55EA;
    font-weight: 700;
  }
  h4{
    color: #3F3B3A;
    font-weight: 900;
  }
  h5{
    font-weight: 100;
  }
  h6 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    font-size: 13px;
  }
`;
const Skill = styled.div`
  width: calc(100% - 35%);
  padding: 20px 10px;
  border: 2px dashed;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: calc(100% - 35%);
    padding: 20px;
    h4 {
      font-size: 22px;
      margin-bottom: 20px;
    };
    & > div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      span{
        width: 30%;
        height: 30%;
        padding: 20px;
        margin-bottom: 80px;
        background-color: #000;
        border: 1px solid #000;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    };
  };
  & > dl {
    width: 35%;
    padding: 20px;
    height: 100%;
    dt {
    font-size: 18px;
    margin-top: 20px;
    text-transform: lowercase;
    color: #7D55EA;
    font-weight: bold;
    }
    dd{
      font-size: 12px;
    }
  };
`;
function About() {
    return (
      <Container>
        <Wrapper>
          <Hello>
            <h3>만나서</h3>
            <h4>반갑습니다</h4>
            <h5>Ms9306입니다</h5>
            <div style={{marginTop:"50px"}}>
              <h6>노력하는 개발자</h6>
              <p>
              아직 부족하지만 빠르게 변화하는 시대에 맞춰 저또한 계속되는 부와 자기계발을 통해
              도태되는 것이 아니라 더 멋진 내일이 올 수 있도록 발전해 나가고 남들보다 한 발 앞서 나가기 위해, 
              더 없이 성장하기 위해 끊임없이 노력하는 프론트엔드 개발자가 되겠습니다. 감사합니다.
              </p>
            </div>
          </Hello>
          <Skill>
            <dl>
              <dt>career</dt>
              <dd>비전큐원격평생교육원(2021.06~2022.06 퍼블리셔)</dd>
              <dd>곧은비즈(2017.09~2019.04 네트워크 초급 엔지니어)</dd>
              <dt>education</dt>
              <dd>수원과학대학교(2012.02 ~ 2015.02 정보통신과)</dd>
              <dd>서울사이버대학교(2021.02 ~ 재학중 컴퓨터 공학과)</dd>
              <dt>Certification</dt>
              <dd>정보처리산업기사(2013)</dd>
              <dt>experience</dt>
              <dd>더조은아카데미(2020.10 ~ 2021.02 웹 퍼블리셔 과정)</dd>
            </dl>
            <div>
              <h4>skills i have</h4>
              <div>
                <span>
                  <img src="img/html_w.png" alt="logoImg"></img>
                </span>
                <span><img src="img/css_w.png" alt="logoImg"></img></span>
                <span><img src="img/js_w.png" alt="logoImg"></img></span>
                <span><img src="img/react_w.png" alt="logoImg"></img></span>
                <span><img src="img/nodejs_W.png" alt="logoImg"></img></span>
                <span><img src="img/mysql_W.png" alt="logoImg"></img></span>
              </div>
            </div>
          </Skill>
        </Wrapper>
      </Container>
    );
  }
  
  export default About;
  