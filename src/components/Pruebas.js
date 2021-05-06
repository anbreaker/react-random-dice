import React from 'react';

import { useForm } from '../hooks/useForm';

export const Pruebas = () => {
  const { formValues, handleInputChange } = useForm({
    numFaces: '',
    numDices: '',
  });

  const { numFaces, numDices } = formValues;

  console.log(numFaces, numDices);

  return (
    <>
      <div className="container mt-5">
        <h1>Lanzar Dados 🎲 </h1>

        <div className="jumbotron">
          <form>
            <div className="row">
              {' '}
              <div className="col">
                <div className="form-group">
                  <label htmlFor="numFaceDice">Número de Caras del Dado:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Introduce un Número de Caras para el Dado."
                    name="numFaces"
                    value={numFaces}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="nunDices">Número de Dados:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Introduce el Número de Dados que deseas lanzar."
                    name="numDices"
                    value={numDices}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* {rigthNumberFace && (
              <p className="text-warning">
                El número del dado introducidos ha de ser un numero entero (n) y mayor de
                3. (Si no puedes jugar con monedas 🤪)
              </p>
            )} */}

            <div className="row justify-content-center">
              <button type="submit" className="btn btn-lg btn-primary">
                Lanzar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
