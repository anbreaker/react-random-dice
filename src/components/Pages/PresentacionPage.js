import React from 'react';

export const PresentacionPage = () => {
  return (
    <>
      <div className="container mt-3">
        <h1>BeKind Software, prueba Técnica</h1>

        <div className="jumbotron mt-2">
          <h4>
            <b>Reto</b>
          </h4>
          <ul>
            <li>Crear una aplicación que permita al usuario "lanzar dados” 🎲. ✔️</li>
            <li>
              Enlace al proyecto en github:
              <a
                href="https://github.com/anbreaker/react-random-dice"
                target="_blank"
                rel="noopener noreferrer">
                {' '}
                BeKind Software, prueba Técnica ✔️
              </a>
            </li>
          </ul>

          <h5>Historias de usuario:</h5>
          <ul>
            <li>Los usuarios deberán poder realizar la acción de lanzar dados. ✔️</li>
            <li>
              Un dado no debe caer dos veces consecutivas en el mismo valor pero mantener
              la aleatoreidad en el resto de las caras. ✔️
            </li>
          </ul>

          <h5>Extras:</h5>
          <p>
            Cumplir con alguna, varias o todas estas funcionalidades extra te da puntos 🙂
          </p>
          <ul>
            <li>Poder elegir la cantidad de caras del dado. ✔️</li>
            <li>Poder tirar múltiples dados a la vez. ✔️</li>
            <li>Poder tirar múltiples dados de diferentes caras a la vez.</li>
            <li>
              Poder ingresar múltiples usuarios y llevar turnos para tirar los dados así
              como un conteo de los mismos.
            </li>
          </ul>

          <h5>Tecnología:</h5>
          <ul>
            <li>El demo debe correr en el navegador y tener una interfaz gráfica ✔️</li>
            <li>
              Puedes usar cualquier librería de javascript (react, vue, svelte, etc) ✔️
            </li>
            <li>Poder tirar múltiples dados de diferentes caras a la vez.</li>
            <li>El proyecto debe estar versionado en git.</li>
          </ul>

          <h5>Presentación:</h5>
          <ul>
            <li>
              El repositorio así como instrucciones para correrlo deben estar en un
              repositorio de github. ✔️
            </li>
            <li>La aplicación debe poder correr en un navegador. ✔️</li>
            <ul>
              <dd>
                Puntos extra si nos mandas el código corriendo en algún servidor. ✔️
              </dd>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};
