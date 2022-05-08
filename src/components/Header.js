
import styled from 'styled-components';
const SideContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 250px;
height: 100%;
background-color: #212428;
ul {
  border: 1px solid;
  margin-top: 250px;
  li {
    margin: 20px 0;
    font-weight: bold;
    text-align: center;
    a {
      color: ${props=>props.HomeMatch?"#000":"#888"};
      transition: 0.3s;
      position: relative;
      &:hover {
          color: red;
      }
    }
  }
}
`;
// const Circle = styled.div`
// position: absolute;
// left: -10px;
// top: 50%;
// transform: translate(-50%,0);
// width: 10px;
// height: 3px;
// background-color: red;
// `;
function Header() {
  return (
    <SideContainer>
      <nav>
        <ul>
          {/* <Link to="1" spy={true} smooth={true}>Home</Link>
          <Link to="2" spy={true} smooth={true}>About</Link>
          <Link to="3" spy={true} smooth={true}>Project</Link> */}
          <li>Comment</li>
          <li>Greeting</li>
        </ul>
      </nav>
    </SideContainer>
  );
}

export default Header;
