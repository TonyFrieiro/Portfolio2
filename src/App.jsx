import './App.css';

import Presentacion from './Components/Presentacion';
import AboutMe from './Components/AboutMe';
import Skills from './Components/skills';
import Education from './Components/Education';
import Proyectos from './Components/Proyectos';
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
      <NavBar/>
        <Presentacion></Presentacion>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Education></Education>
        <Proyectos></Proyectos>
      <Footer/>
    </>
  );
}

export default App;
