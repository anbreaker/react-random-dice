import React, { useEffect, useState } from 'react';

import { OneDice } from '../Parts/OneDice';

// import { Jumbo } from './Parts/Jumbo';

export const OptionsPage = () => {
  const [numeroCaras, setNumeroCaras] = useState(3);
  const [numeroDados, setNumeroDados] = useState(1);

  const [rigthNumberFace, setRigthNumberFace] = useState(false);
  const [rigthNumberDices, setRigthNumberDices] = useState(false);

  const handleInputFaces = ({ target }) => {
    const numCaras = parseInt(target.value);

    if (Number.isInteger(numCaras)) {
      setNumeroCaras(target.value);
      setRigthNumberFace(true);
    } else {
      setRigthNumberFace(false);
    }
  };

  const handleInputDices = ({ target }) => {
    setNumeroDados(target.value);
  };

  useEffect(() => {
    if (!validateInputFaces(numeroCaras)) setRigthNumberFace(true);

    if (!validateInputDices(numeroDados)) setRigthNumberDices(true);
  }, [numeroCaras, numeroDados]);

  const validateInputFaces = (numeroCaras) => {
    const numCaras = parseInt(numeroCaras);

    console.log(Number.isInteger(numCaras), numCaras, '<-- numCaras');
  };

  const validateInputDices = (numeroDados) => {
    const numDados = parseInt(numeroDados);

    console.log(Number.isInteger(numDados), numeroDados, '<-- numeroDados');
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Lanzar Dados 🎲 </h1>

        <OneDice />

        <div className="jumbotron">
          <form>
            <div className="row mt-lg-3">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="numFaceDice">Número de Caras del Dado:</label>
                  <input
                    type="number"
                    pattern="\d+"
                    className="form-control"
                    id="numeroCaras"
                    aria-describedby="numeroCarasDado"
                    placeholder="Introduce un Número de Caras para el Dado."
                    value={numeroCaras}
                    onChange={handleInputFaces}
                    // onFocus={}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="nunDices">Número de Dados:</label>
                  <input
                    type="number"
                    pattern="\d+"
                    className="form-control"
                    id="numeroDados"
                    aria-describedby="numeroDados"
                    placeholder="Introduce el Número de Dados que deseas lanzar."
                    value={numeroDados}
                    onChange={handleInputDices}
                    // onFocus={}
                  />
                </div>
              </div>
              {rigthNumberFace && (
                <div className="col mt-lg-3 justify-content-center">
                  <p className="text-warning text-center">
                    El número del dado introducidos ha de ser un numero entero (n) y mayor
                    de 3. (Si no puedes jugar con monedas 🤪)
                  </p>
                </div>
              )}

              {rigthNumberDices && (
                <div className="col mt-lg-3 justify-content-center">
                  <p className="text-warning text-center">
                    El número de dados introducidos ha de ser un numero entero (n) y mayor
                    de 1.
                  </p>
                </div>
              )}
            </div>

            <div className="row mt-lg-3 justify-content-center">
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
