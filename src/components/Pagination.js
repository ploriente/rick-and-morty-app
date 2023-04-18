import React from "react";

//por props recibe desde el componente a esta usando la aplicacion
//la API nos devuelve valores para next y prev
const Pagination = ({ prev, next, onPrevious, onNext }) => {
  // creamos las funciones dentro del componente para paginar
  const handlePrevious = () => {
    onPrevious();
  };
  //en la ultima pagina va a tener anterior pero no siguiente
  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <nav className="my-5">
        <ul className="pagination justify-content-center">
          {/* uso un ternario para determinar la paginacion */}
          {prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePrevious}>
                  Previous
                </button>
              </li>
            ) : null //no muestra nada sino tiene registro previo
          }
          {next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
