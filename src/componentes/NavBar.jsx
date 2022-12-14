import React from "react";
import Carrito from "./carrito";

const NavBar = () => {
     return (
<div className="container">
            <div className="row">
                <div className="col-md-6">
                    
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="img/Logo-Tienda.png" alt="Imported Store" width="150" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Productos destacados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    
                    </ul>
                </div>
        </div>
    </nav>
                
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <Carrito /> 
                    
                </div>

            </div>
        </div>

    )
}
export default NavBar;