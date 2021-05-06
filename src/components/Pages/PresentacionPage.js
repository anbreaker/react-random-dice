import React from 'react';

export const PresentacionPage = () => {
  return (
    <>
      <div className="container mt-3">
        <h1>BeKind Software, prueba Técnica</h1>

        <div className="jumbotron mt-3">
          <h4>Reto</h4>
          <ul>
            <li>Crear una aplicación que permita al usuario "lanzar dados” 🎲. ✔️</li>
          </ul>

          <h4>Historias de usuario:</h4>
          <ul>
            <li>Los usuarios deberán poder realizar la acción de lanzar dados. ✔️</li>
            <li>
              Un dado no debe caer dos veces consecutivas en el mismo valor pero mantener
              la aleatoreidad en el resto de las caras. ✔️
            </li>
          </ul>

          <h4>Extras</h4>
          <p>
            Extras: Cumplir con alguna, varias o todas estas funcionalidades extra te da
            puntos 🙂
          </p>
          <ul>
            <li>Poder elegir la cantidad de caras del dado.</li>
            <li> Poder tirar múltiples dados a la vez.</li>
            <li>Poder tirar múltiples dados de diferentes caras a la vez.</li>
            <li>
              Poder ingresar múltiples usuarios y llevar turnos para tirar los dados así
              como un conteo de los mismos.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
