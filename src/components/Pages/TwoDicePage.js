import React, { useState } from 'react';

import { ramdom } from '../../Helpers/numRandom';

import { Jumbo } from '../Parts/Jumbo';

export const TwoDicePage = () => {
  const caras = ['one', 'two', 'three', 'four', 'five', 'six'];

  const [randomNumDado1, setRandomNumDado1] = useState(1);
  const [randomNumDado2, setRandomNumDado2] = useState(1);

  const handleRollDice1 = () => {
    const valueDiceRandom = ramdom();

    if (randomNumDado1 !== valueDiceRandom) setRandomNumDado1(valueDiceRandom);
    else handleRollDice1();
  };

  const handleRollDice2 = () => {
    const valueDiceRandom2 = ramdom();

    if (randomNumDado2 !== valueDiceRandom2) setRandomNumDado2(valueDiceRandom2);
    else handleRollDice2();
  };

  const handleRollDices = () => {
    handleRollDice1();
    handleRollDice2();
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="row mt-5">
          <div className="col text-center">
            <div className="btn btn-lg btn-danger" onClick={handleRollDice1}>
              <i
                className={`fas fa-dice-${caras[randomNumDado1 - 1]} icon`}
                // El css anclado directo es simplemente para mostrar que conozco mas formas.
                // style={{ fontSize: '9rem' }}
              ></i>
            </div>
          </div>

          <div className="col d-flex align-items-center justify-content-center">
            <div className="btn btn-lg btn-success" onClick={handleRollDices}>
              <i className="fas fa-random"></i>
            </div>
          </div>

          <div className="col text-center">
            <div className="btn btn-lg btn-danger" onClick={handleRollDice2}>
              <i className={`fas fa-dice-${caras[randomNumDado2 - 1]} icon`}></i>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="title">{randomNumDado1 + randomNumDado2}</div>
        </div>

        <Jumbo
          title={<h4>Uso:</h4>}
          text={
            <>
              <li>
                Los dados funcionan individualmente clicando sobre cada uno de ellos, o en
                conjunto, haciendo click sobre el boton central.
              </li>
              <li>Nunca saldrá dos veces seguidas el mismo valor en el mismo dado</li>
            </>
          }
        />
      </div>
    </>
  );
};
