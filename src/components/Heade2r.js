
// import { useEffect, useState } from "react";
// import { Link,useMatch } from "react-router-dom";
// import styled from "styled-components";

// const HeaderRoute = styled.header`
//   width: ${props=>props.fixHeader?"96%":"100%"};
//   height: 100px;
//   transition: 0.3s ease-in-out;
//   position:fixed;
//   background-color: ${props=>props.fixHeader?"rgba(0,0,0,0.3)":"#171717"} ;
//   border-radius:  ${props=>props.fixHeader?"8px":"0"};
//   left:${props=>props.fixHeader?"2%":"0"};
//   top: ${props=>props.fixHeader?"25px":"0"};
//   border: 1px solid ${props=>props.fixHeader?"#fff":" #171717"};
//   backdrop-filter: blur(7px);
//   nav {
//       display: flex;
//       justify-content: space-between;
//       align-items:center;
//       width: 100%;
//       height: inherit;
//       padding: 0 50px;
//       margin: 0 auto;
//       ul {
//           display: flex;
//           height: inherit;
//           align-items: center;
//           justify-content: flex-end;
//           li {
//             margin-right: 13px;
//             a {
//             color: #fff;
//             transition: 0.3s;
//             position: relative;
//             &:hover {
//                 color: red;
//             }
//         }
//       }
//     }
//   }
// `;
// const Circle = styled.div`
//   position: absolute;
//   left: 50%;
//   top: -5px;
//   transform: translate(0,-50%);
//   width: 3px;
//   height: 3px;
//   background-color: #fff;
// `;
// function Header() {
//   const HomeMatch = useMatch("/");
//   const AboutMatch = useMatch("About");
//   const ProjectMatch = useMatch("project");
//   const CommentMatch = useMatch("Comment");
//   const greetingsMatch = useMatch("Bye");
  
//   const updateScroll = () => {
//     const { scrollY } = window;
//     if(scrollY>=100) {
//       console.log("he")
//       const isScrolled = scrollY !== 0;
//       setScrollFlag(isScrolled);
//     }else {
//       setScrollFlag(false);
//     } 
//   };

// const [scrollFlag, setScrollFlag] = useState(false); 
//  const throttle = (callback,delay)=>{
//    let timer = null;
//    return (()=>{
//      if(timer) return;
//      timer = setTimeout(()=>{
//        callback();
//        timer=null;
//      },delay)
//    })
//  };

// const handleScrollB = throttle(updateScroll, 100);

// useEffect(() => {
//   window.addEventListener("scroll", handleScrollB);
// }, []);
//   return (
//     <HeaderRoute fixHeader={scrollFlag}>
//         <nav>
//             <h1><Link to="/"><img src="img/logo.png" alt="logoImg"></img></Link></h1>
//             <ul>
//                 <li><Link to="/">Home{HomeMatch&&<Circle></Circle>}</Link></li>
//                 <li><Link to="About">About{AboutMatch&&<Circle></Circle>}</Link></li>
//                 <li><Link to="project">Project{ProjectMatch&&<Circle></Circle>}</Link></li>
//                 <li><Link to="Comment">Comment{CommentMatch&&<Circle></Circle>}</Link></li>
//                 <li><Link to="Bye">greetings{greetingsMatch&&<Circle></Circle>}</Link></li>
//             </ul>
//         </nav>
//     </HeaderRoute>
//   );
// }

// export default Header;
