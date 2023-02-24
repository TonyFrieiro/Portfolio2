import { BsGithub,BsLinkedin } from "react-icons/bs";
import pdf from "../archivos/CV-FrieiroTony.pdf"


function Presentacion(){
    return(
        <div className="containerPresentacion" id="presentacion">
            <div className="container-info">
                <div className="nombre">
                    <p className="hola">Hola! Soy</p>
                    <h1>Tony Frieiro</h1>
                    <p className="web">Desarrollador web full-stack</p>
                </div>
                <div className="container-parrafo">
                    <p>Estudiante de desarrollo web full stack con amplios conocimientos, ganas de seguir aprendiendo y desarrollarme en el ambito profesional</p>
                </div>
                <div className="botonera">
                    <button className="button1">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">DescargarCV</a>
                    </button>
                    <button className="button2">
                        <a href="mailto:tonyfrieiro@gmail.com?">Contacto</a>
                    </button>
                </div>
            </div>
            <div className="container-img">
                <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1670355183/imgYo_qptmq2.jpg" alt="foto tony" />
            </div>
            <div className="container-redes">
                <button>
                    <a href="https://github.com/TonyFrieiro" target="_blank" rel="noopener noreferrer"><BsGithub size={30} color={"white"}/></a>
                </button>
                <button>
                    <a href="https://www.linkedin.com/in/tony-frieiro/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30} color={"white"}/></a>
                </button>
            </div>
        </div>
    )
}

export default Presentacion