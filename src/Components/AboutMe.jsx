

function AboutMe(){

    return(
        <div className="containerAboutMe" id="aboutMe-container">
            <div className="tituloAboutMe">
                <h1>About Me</h1>
            </div>
            <div className="seccionesAboutMe">
                <div className="imgAboutMe">
                    <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1672253668/flat-lay-coffee-cups-and-laptop-minimalism_gr6eiu.jpg" className="aboutAnimation nimate__animated "  alt="Programador" />
                </div>
                <div className="textoAboutMe">
                    <h2 className="tituloTextoAboutMe">Tony Frieiro</h2>
                    <p>Soy estudainte de desarrollo web full stack luego haber terminado el secuandrio tecnico en computacion donde adquiri mucho conocimiento</p>
                    <p>En búsqueda de un desafío profesional que me permita crecer y aplicar los conocimientos que adquiri.</p>
                    <p>Mi meta es continuar desarrollándome para alcanzar a ser un muy buen profesional</p>
                </div>
            </div>

            <script src="../aboutMe.js"></script>

        </div>
    )
    
}

export default AboutMe