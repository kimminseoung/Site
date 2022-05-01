import Intro from "./Intro.js"
import About from "./About.js"
import styled from 'styled-components';
import { useRef,useEffect } from "react";
import Project from './Project';

function Main() {
  const controlpage = useRef();
  const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
    &::-webkit-scrollbar{display: none;}
    & > div {
      height: 100vh;
    }
  `;
  const DIVIDER_HEIGHT = 5;
  useEffect(()=>{
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = controlpage.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          controlpage.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          controlpage.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          controlpage.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          controlpage.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          controlpage.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          controlpage.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const pageCurrent = controlpage.current;
    pageCurrent.addEventListener("wheel", wheelHandler);
    return ()=>{
      pageCurrent.removeEventListener("wheel", wheelHandler);
    }
  },[])
  return (
  <Container ref={controlpage}>
    <Intro/>
    <About/>
    <Project/>
  </Container>
    
  );
}

export default Main;
