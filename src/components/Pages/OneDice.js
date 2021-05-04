import React, { useState } from 'react';

import { Jumbo } from '../Parts/Jumbo';

export const OneDice = () => {
  const caras = ['one', 'two', 'three', 'four', 'five', 'six'];

  const [randomNumDado1, setRandomNumDado1] = useState(1);
  const [shake, setShake] = useState(false);

  const ramdom = (max = 6, min = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + 1);
  };

  const handleRollDice1 = () => {
    const valueDiceRandom = ramdom();

    if (randomNumDado1 !== valueDiceRandom) {
      setRandomNumDado1(valueDiceRandom);
      setShake(true);
    } else {
      handleRollDice1();
      setShake(false);
    }
  };

  console.log(shake);

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

          <div className="col text-center">
            <div className="title">{randomNumDado1}</div>
          </div>
        </div>
        <Jumbo
          title={<h4>Uso</h4>}
          text={
            <li>
              Pulsa sobre el dado y saldrá un número aleatorio, pero nunca saldrá dos
              veces seguidas el mismo valor.
            </li>
          }
        />
      </div>
    </>
  );
};
