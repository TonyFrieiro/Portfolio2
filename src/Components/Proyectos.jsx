

function Proyectos(){
    return(
        <div className="containerProyectos" id="proyectos-container">
            <div className="tituloAboutMe">
                <h1>Proyectos</h1>
            </div>
            <div className="seccionesProyectos">
                <div className="tarjetasProyectos">
                    <div className="tarjetaP">
                        <div className="ajustes">
                            <div className="container-tarjetaP">
                                <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1675038861/Euporie-React_lcybk8.png" className="imgTarjeta" alt="" />
                            </div>
                            <div>
                                <h3 className="subtituloProyectos">Ecommerce</h3>
                                <div className="parrafo">
                                    <p> Ecommerce realizado principalmente con React JS,  
                                        <br /> 
                                        CSS, JS y Bootstrap. Posee funcionalidades como 
                                        <br />
                                        la busqueda de productos por su tipo, agregar 
                                        <br />
                                        productos a un carrito, el cual caundo se 
                                        <br />
                                        realiza la compra es enviada a firebase para 
                                        <br />
                                        almacenarse.
                                    </p>
                                </div>
                            </div>
                            <div className="botonera">
                                <button className="button2"><a href="https://github.com/TonyFrieiro/ecommerce-React">Github</a></button>
                                <button className="button1"><a href="https://euporie-react.netlify.app/">Demo</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetaP">
                        <div className="ajustes">
                            <div className="container-tarjetaP">
                                <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1675040548/Api-Paises_ja1nt4.png" className="imgTarjeta" alt="" />
                            </div>
                            <div>
                                <h3 className="subtituloProyectos">Buscador de Paises</h3>
                                <div className="parrafo">
                                    <p> Buscador realizado principalmente con React JS,  
                                        <br /> 
                                        JS y Bootstrap. Posee funcionalidades como 
                                        <br />
                                        la busqueda de paises por su region, la  
                                        <br />
                                        busqueda de paises por sus letras,modo claro    
                                        <br />
                                        y oscuro, una vista con las caracteristicas de 
                                        <br />
                                        cada pais sacadas de la Api Paises: 
                                        <br />
                                        https://restcountries.com/.
                                    </p>
                                </div>
                            </div>
                            <div className="botonera">
                                <button className="button2"><a href="https://github.com/TonyFrieiro/BuscadorPaises">Github</a></button>
                                <button className="button1"><a href="https://encuentrapais.netlify.app/">Demo</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetaP">
                        <div className="ajustes">
                            <div className="container-tarjetaP">
                                <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1675041460/istockphoto-984996502-612x612_qivbzp.jpg" className="imgTarjeta" alt="" />
                            </div>
                            <div>
                                <h3 className="subtituloProyectos">Login,Register,Ecommerce</h3>
                                <div className="parrafo">
                                    <p> Ecommerce realizado principalmente con Node JS,  
                                        <br /> 
                                        Express y MongoDB. Posee funcionalidades como 
                                        <br />
                                        el registro y login de usuarios, posibilidad  
                                        <br />
                                        de ingresar productos a la lista si uno es admin,    
                                        <br />
                                        carrito que se almacena en base de datos junto 
                                        <br />
                                        con los datos del ususario que lo compro para 
                                        <br />
                                        enviarle sus productos(+ seguridad )
                                    </p>
                                </div>
                            </div>
                            <div className="botonera">
                                <button className="button2"><a href="https://github.com/TonyFrieiro/Backend/tree/main/ProyectoFinalMongo">Github</a></button>
                                <button className="button1"><a href="https://media.istockphoto.com/id/984996502/pt/vetorial/coming-soon-vector-template-design.jpg?s=612x612&w=0&k=20&c=I2BHidTEc02FmSYD7ncyOSpVfMafXr6kfiVQ_v2-Uc8=">Demo</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos