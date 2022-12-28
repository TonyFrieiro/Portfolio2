import { Link } from "react-scroll";


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
            >Presentacion</Link>
            <Link
                activeClass="active"
                to="aboutMe-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >AboutMe</Link>
            <Link
                activeClass="active"
                to="contenedor-education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Education</Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >skills</Link>
            <Link
                activeClass="active"
                to="proyectos-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Proyects</Link>
        </div>

    )
}

export default Navbar