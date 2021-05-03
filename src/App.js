import React, { useState } from 'react';

export const App = () => {
  const [randomNum, setRandomNum] = useState(1);

  const change = (event, max = 6, min = 1) => {
    event.preventDefault();

    setRandomNum(Math.floor(Math.random() * (max - min + 1) + 1));
    console.log(randomNum);
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Lanzar Dados 🎲 </h1>

        <div className="btn btn-lg btn-danger" onClick={change}>
          <i className="fas fa-dice "></i>
        </div>

        <div>{randomNum}</div>
      </div>
    </>
  );
};
