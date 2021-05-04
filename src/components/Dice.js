import React, { useState } from 'react';

export const Dice = () => {
  const [randomNum, setRandomNum] = useState(1);

  const ramdom = (max = 6, min = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + 1);
  };

  const handleRollDice = () => {
    const valueDiceRandom = ramdom();

    if (randomNum !== valueDiceRandom) setRandomNum(valueDiceRandom);
    else handleRollDice();
  };

  console.log(randomNum);

  return (
    <>
      <div className="container mt-5 ">
        <div className="row mt-5">
          <div className="col d-flex align-items-center">
            <div className="btn btn-lg btn-danger" onClick={handleRollDice}>
              <i
                className="fas fa-dice icon"
                // El css anclado directo es simplemente para mostrar que conozco mas formas.
                // style={{ fontSize: '9rem' }}
              ></i>
            </div>
          </div>

          <div className="col text-center">
            <div className="title">{randomNum}</div>
          </div>
        </div>
      </div>
    </>
  );
};
