import React from 'react';

import { OneDice } from '../Parts/OneDice';
import { Jumbo } from '../Parts/Jumbo';

export const OneDicePage = () => {
  return (
    <>
      <div className="container mt-5 ">
        <OneDice />

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
