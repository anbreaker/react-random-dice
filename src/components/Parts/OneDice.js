import React, { useState } from 'react';

import { ramdom } from '../../Helpers/numRandom';

export const OneDice = () => {
  const caras = ['one', 'two', 'three', 'four', 'five', 'six'];

  const [randomNumDado, setRandomNumDado] = useState(1);

  const handleRollDice = () => {
    const valueDiceRandom = ramdom();

    if (randomNumDado !== valueDiceRandom) setRandomNumDado(valueDiceRandom);
    else handleRollDice();
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="btn btn-lg btn-danger" onClick={handleRollDice}>
            <i
              className={`fas fa-dice-${caras[randomNumDado - 1]} icon`}
              // El css anclado directo es simplemente para mostrar que conozco mas formas.
              // style={{ fontSize: '9rem' }}
            ></i>
          </div>
        </div>

        <div className="col text-center">
          <div className="title">{randomNumDado}</div>
        </div>
      </div>
    </>
  );
};
