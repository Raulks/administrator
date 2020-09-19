import React, { Fragment } from "react";
import Formulario from './components/Formulario'
function App() {
  return (
    <Fragment>
      <h1>Chariot Vet<img alt='dog' src="https://img.icons8.com/pastel-glyph/64/000000/dog--v2.png"/></h1>
 

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
