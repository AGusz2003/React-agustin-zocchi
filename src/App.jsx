import React from "react";
import Fotter from "./componentes/Fotter";
import Header from "./componentes/Header";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import Productos from "./componentes/Productos";

const App = () => {

  return (
    <div>
     <NavBar />
     <ItemListContainer Saludo={"bienvenido a la mejor pagina de exportarcion de zapatillas en argentina"} />
     <Productos />
     <Fotter />


    </div>
    
  )
}

export default App;