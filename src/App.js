import {BrowserRouter,Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Main";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Project from './Project';
function App() {

  return (
    <BrowserRouter>
      <SideNav/>
      <Routes>
        <Route path="/" element={<Home/>}>Main</Route>
        <Route path="/About" element={<About/>}>About</Route>
        <Route path="/Project" element={<Project/>}>About</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
