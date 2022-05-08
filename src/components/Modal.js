
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`
    position: fixed;
    transition: 0.5s;
    top: 0;
    left: 0;
    display: ${props=>props.close?"block":"none"};
    width: 100vw;
    height: 100vh;
    z-index: ${props=>props.close?"11":"0"};
  `;
const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    transition: 0.5s;
    left: ${props=>props.close?"50%":"48%"};
    transform: translate(-50%,-50%);
    width: 1200px;
    height: 510px;
    background-color: #212428;
    padding: 45px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255,255,255,0.1);
    & > div {
      width: 45px;
      height: 45px;
    };
    & > div:not(:last-child){
      float: left;
      width: 50%;
      height: 100%;
      display: inline-block;
    }
`;
const ModalImg = styled.div`
  img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ModalText = styled.div`
  padding-left: 50px;
  color: #fff;
  h2 {
    font-size: 29px;
    margin-bottom: 50px;
  }
  p {
    padding: 20px;
  }
  & > div {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    a{
      display: block;
      margin: 10px 20px;
      padding: 15px 35px;
      letter-spacing: 1px;
      border-radius: 8px;
      background: linear-gradient(145deg, #1e2024, #23272b);
      box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
      transition: 0.4s;
      color: #ff014f;
      &:hover {
        margin-top: 5px;
        color: #fff;
      }
    }
  }
`;
const CloseModal = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  line-height: 45px;
  border-radius: 50%;
  background-color: #212428;
  text-align: center;
  box-shadow: 0 0 10px rgba(255,255,255,0.1);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

function Modal({detaildata,openModal}) {
  const [close,setClose]=useState(openModal);
  const onClick = () => {
    setClose(prev=>!prev)
  };
  
  return (
    <Container close={close}>
      <ModalWrapper>
        <ModalImg>
          <img src={`img/${detaildata.imgUrl}`} alt={`${detaildata.imgUrl}`} />
        </ModalImg>
        <ModalText>
          <h2>{detaildata.name}</h2>
          <p>
            {detaildata.text}
          </p>
          <div>
            <div>
              <a target="blank" href={`${detaildata.githubUrl}`}>Git Hub</a>
            </div>
            <div>
            <a target="blank" href={`${detaildata.webPage}`}>Web Site</a>
            </div>
          </div>
        </ModalText>
        <CloseModal onClick={onClick}>
          X
        </CloseModal>
      </ModalWrapper>
    </Container>
  );
}

export default Modal;
