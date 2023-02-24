import { Link } from "react-scroll";
import { BsPersonLinesFill,BsTools,BsLightbulbFill,BsPersonBoundingBox } from "react-icons/bs";
import { FaGraduationCap} from "react-icons/fa";


function Navbar(){
    return(
        <div className="container-navbar">
            <Link
                activeClass="active"
                to="presentacion"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><p className="textoNavBar"> Presentacion</p><BsPersonLinesFill size={20} className="iconoNav"></BsPersonLinesFill></Link>
            <Link
                activeClass="active"
                to="aboutMe-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><p className="textoNavBar"> AboutMe </p><BsPersonBoundingBox size={20} className="iconoNav"></BsPersonBoundingBox></Link>
            <Link
                activeClass="active"
                to="skills-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><p className="textoNavBar"> Skills </p><BsTools size={20} className="iconoNav"></BsTools></Link>
            <Link
                activeClass="active"
                to="contenedor-education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><p className="textoNavBar"> Education </p><FaGraduationCap size={20} className="iconoNav"></FaGraduationCap></Link>
            <Link
                activeClass="active"
                to="proyectos-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><p className="textoNavBar"> Proyectos </p><BsLightbulbFill size={20} className="iconoNav"></BsLightbulbFill></Link>
        </div>

    )
}

export default Navbar