import React, { useState } from 'react';
import { isInt } from 'validator';
import { ramdom } from '../../Helpers/numRandom';

import { useForm } from '../../hooks/useForm';

export const DiceOptions = () => {
  const [viewErrorFace, setViewErrorFace] = useState(false);
  const [viewErrorDice, setViewErrorDice] = useState(false);
  const [result, setResult] = useState(1);

  const { formValues, handleInputChange } = useForm({
    numFaces: '',
    numDices: '',
  });

  const { numFaces, numDices } = formValues;

  const validateInput = (event) => {
    event.preventDefault();

    if (isInt(numFaces) && numFaces >= 3) setViewErrorFace(false);
    else setViewErrorFace(true);

    if (isInt(numDices)) setViewErrorDice(false);
    else setViewErrorDice(true);

    rollDices();
  };

  const rollDices = () => {
    let total = 0;

    for (let i = 0; i < numDices; i++) {
      total += ramdom(numFaces);
    }

    console.log({ total }, { result });

    setResult(total);
  };

  const handleViewErrorFace = () => setViewErrorFace(false);

  const handleViewErrorDice = () => setViewErrorDice(false);

  return (
    <>
      <div className="container mt-5">
        <h1>Lanzar Dados 🎲 </h1>

        <div className="row mt-5">
          <div className="col text-center">
            <div className="btn btn-lg badge-info" onClick={validateInput}>
              <i className={`fas fa-dice-d20 icon`}></i>
            </div>
            <div className="col text-center mt-2">
              <div className="text-info">{`Caras dado: ${numFaces}  ` || ''}</div>
            </div>
          </div>

          <div className="col text-center ">
            <div className="btn btn-lg badge-info" onClick={validateInput}>
              <i className={`fas fa-cubes icon`}></i>
            </div>

            <div className="col text-center mt-2">
              <div className="text-info">{`Número de dados: ${numDices}  ` || ''}</div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="count-dices">Suma total: {result}</div>
        </div>

        <div className="jumbotron mt-5">
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
