import React from 'react';

export const Options = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Lanzar Dados 🎲 </h1>
        <form>
          <div className="row mt-lg-3">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Número de Caras del Dado</label>
                <input
                  type="number"
                  pattern="\d+"
                  className="form-control"
                  id="numeroCaras"
                  aria-describedby="numeroCarasDado"
                  placeholder="Introduce un Número de Caras para el Dado"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
