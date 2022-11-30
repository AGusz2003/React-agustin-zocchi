import React from "react";
import Carrito from "./carrito";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <NavBar />
                
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <Carrito /> 
                    
                </div>

            </div>
        </div>
    )
}
export default Header;