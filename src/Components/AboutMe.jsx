

function AboutMe(){

    return(
        <div className="containerAboutMe" id="aboutMe-container">
            <div className="tituloAboutMe">
                <h1>Sobre mi</h1>
            </div>
            <div className="seccionesAboutMe">
                <div className="imgAboutMe">
                    <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1672253668/flat-lay-coffee-cups-and-laptop-minimalism_gr6eiu.jpg" className="aboutAnimation nimate__animated "  alt="Programador" />
                </div>
                <div className="textoAboutMe">
                    <h2 className="tituloTextoAboutMe">Tony Frieiro</h2>
                    <p>En 2021 finalicé el secundario técnico especializado en computación, donde aprendí los fundamentos basico de la programación primero en pseudocódigo como PSeInt y luego en lenguajes como Python y Java.</p>
                    <p>A la par del secundario fui aprendiendo desarrollo web mediante cursos. Luego de terminar el secundario decidí profundizar mi conocimiento en JavaScript por lo que a lo largo del año realice la carrera de desarrollo web full stack en Coderhouse (12 meses), complementando con material extra de distintos sitios y proyectos personales.</p>
                    <p>Mi meta es continuar desarrollándome para alcanzar a ser un excelente profesional.</p>
                </div>
            </div>

            <script src="../aboutMe.js"></script>

        </div>
    )
    
}

export default AboutMe