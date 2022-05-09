
import styled from 'styled-components';
import { useState } from 'react';
import Modal from './Modal';

const ContentInner = styled.div`
color: #fff;
flex-basis: 32%;
padding: 30px;
box-shadow: 0 0 10px rgba(255,255,255,0.1);
border-radius: 10px;
margin: 3px;
& > span {
  display: block;
  margin-top: 10px;
  text-align: left;
  color: crimson;
  font-size:12px;
  &>span {
    display: inline-block;
    margin-right: 5px;
    padding:2px 6px;
    border-radius: 7px;
    color: #fff;
    background-color: #666;
  }
}
h2 {
  cursor: pointer;
  font-size: 23px;
  margin-top: 10px;
  padding-left: 0;
  transition: 0.3s;
  &:hover {
    padding-left: 5px;
    color: crimson;
  }
}
`
const ImgContainer = styled.div`
overflow: hidden;
img {
  cursor: pointer;
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: 0.5s;
  &:hover {
    transform: scale(1.03);
  }
}
`;
function Content({data}) {
  const [openModal,setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(prev=>!prev)
    
  };

  return (
    <>
      <ContentInner>
        <ImgContainer>
          <img onClick={showModal} src={`img/${data.imgUrl}`} alt={`${data.name}`}/>
        </ImgContainer>
        <span>{data.tag.map(text=><span>{text}</span>)}</span>
        <h2 onClick={showModal}>{data.name}</h2>
      </ContentInner>
      {
        openModal?<Modal openModal={openModal} detaildata={data}/>:null
      }
    </>
  );
}

export default Content;
