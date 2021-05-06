import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
        <Link className="navbar-brand" to="/">
          Inicio
        </Link>

        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/one">
            Un Dado
          </Link>
          <Link className="nav-item nav-link" to="/two">
            Dos Dados
          </Link>
          <Link className="nav-item nav-link" to="/opt">
            Varios Dados
          </Link>
        </div>
      </nav>
    </>
  );
};
