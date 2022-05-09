import styled from "styled-components";
import { useEffect, useState } from 'react';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #252525;
  position: relative;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #7C53EB;
    transform: translate(-50%,-50%);
    text-transform: capitalize;
    font-size: 5.625em;
    font-weight: 600;
    letter-spacing: 1px;
    animation: showTitle 0.9s linear;
    &::before{
      content: '';
      position: absolute;
      top: 15%;
      left: -3%;
      width: 15px;
      height: 15px;
      background-color: #fff;
    }
  }
  h2 {
    position: absolute;
    left: 0;
    bottom: 15%;
    font-size: 1.875em;
    transform: rotate(270deg);
    span{color:#fff;}
  }
  @keyframes showTitle {
    0%{
      transform: scale(0) translate(-50%,-50%);
    }
    100%{
      transform: scale(1) translate(-50%,-50%);
    }
  }
`;
function Intro() {
  return (
    <Container>
      <h1 >portfolio.</h1>
      <h2>by. <span>Kim Minseong</span></h2>
    </Container>
  );
}

export default Intro;
