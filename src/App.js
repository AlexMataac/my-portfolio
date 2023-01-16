import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path="/about me" element={<AboutMe/>} />
    <Route path="/resume" element={<Resume/>} />
    <Route path="/experience" element={<Experience/>} />
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact me" element={<Contact/>} />
    
    </Routes>
    <Footer />
    <SocialLinks />
    </>
  );
}

export default App;
