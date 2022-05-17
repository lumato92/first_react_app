import React from "react";
import '../stylesheets/testimonio.css';


function Testimonio(props) {

  return (
    <div className="contenedor-testimonio">

      <img className="imagen-testimonio" src={require(`../images/${props.image}.png`)} alt="imagen de persona" />

      <div className="contenedor-text-testimonio">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">{props.testimonio}</p>

      </div>

    </div>
  )      

    
}

export default Testimonio;