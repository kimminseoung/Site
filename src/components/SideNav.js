
import styled from 'styled-components';
import { Link,useMatch } from 'react-router-dom';
function SideNav() {
  const HomeMatch = useMatch("/");
  const AboutMatch = useMatch("About");
  const ProjectMatch = useMatch("project");
  const CommentMatch = useMatch("Comment");
  const greetingsMatch = useMatch("Bye");
  const SideContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    line-height: 45px;
    border: 1px solid;
    background-color: #fff;
    ul {
      border: 1px solid;
      margin-top: 0 auto;
      li {
        transform: rotate(180deg);
        writing-mode: vertical-lr; transform: rotate(180deg);
        margin: 10px 0;
        font-weight: bold;
        color: #888;
        li.active {
          color: #000;
        }
      }
    }
  `;
  const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: -5px;
  transform: translate(0,-50%);
  width: 3px;
  height: 3px;
  background-color: #fff;
  `;

  return (
    <SideContainer>
      <nav>
        <ul>
          <li><Link to="/">Home{HomeMatch&&<Circle></Circle>}</Link></li>
          <li><Link to="About">About{AboutMatch&&<Circle></Circle>}</Link></li>
          <li><Link to="project">Project{ProjectMatch&&<Circle></Circle>}</Link></li>
          <li><Link to="Comment">Comment{CommentMatch&&<Circle></Circle>}</Link></li>
          <li><Link to="Bye">greetings{greetingsMatch&&<Circle></Circle>}</Link></li>
        </ul>
      </nav>
    </SideContainer>
  );
}

export default SideNav;
