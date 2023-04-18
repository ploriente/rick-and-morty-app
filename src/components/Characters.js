//usamos el snippet 'rafce' ...
import React from "react";

//en la props 'characters' recibimos el arrays de personajes q vamos a obtener
const Characters = ({ characters = [] }) => {
  return (
    //es una clase q crea lineas y columnas de bootstrap
    <div className="row">
      {characters.map((item, index) => (
        //para tener un indice aprovechamos y creamos la key con el index
        //cada item va a representar una tarjeta con cada personaje
        <div key={index} className="col" mb-4>
            <div className="card" style={{minWidth:"200px"}}>
                <img src={item.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <hr />
                    <p>species: {item.species}</p>
                    <p>location: {item.location.name}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
