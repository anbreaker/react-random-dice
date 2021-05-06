import React, { useState } from 'react';
import { isInt } from 'validator';

import { useForm } from '../hooks/useForm';

export const Pruebas = () => {
  const [viewErrorFace, setViewErrorFace] = useState(false);
  const [viewErrorDice, setViewErrorDice] = useState(false);

  const { formValues, handleInputChange } = useForm({
    numFaces: '',
    numDices: '',
  });

  const { numFaces, numDices } = formValues;

  const validateInput = (event) => {
    event.preventDefault();

    if (isInt(numFaces)) setViewErrorFace(false);
    else setViewErrorFace(true);

    if (isInt(numDices)) setViewErrorDice(false);
    else setViewErrorDice(true);
  };

  const handleViewErrorFace = () => setViewErrorFace(false);

  const handleViewErrorDice = () => setViewErrorDice(false);

  return (
    <>
      <div className="container mt-5">
        <h1>Lanzar Dados 🎲 </h1>

        <div className="jumbotron">
          <form onSubmit={validateInput}>
            <div className="row">
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
                    onFocus={handleViewErrorFace}
                  />
                </div>

                {viewErrorFace && (
                  <p className="text-warning">
                    El número de caras para el dado introducido, ha de ser un valor entero
                    (n) y mayor de 3. (Si no puedes jugar con monedas 🤪)
                  </p>
                )}
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
                    onFocus={handleViewErrorDice}
                  />
                </div>

                {viewErrorDice && (
                  <p className="text-warning">
                    El número de dados introducido, ha de ser un valor entero.
                  </p>
                )}
              </div>
            </div>

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
