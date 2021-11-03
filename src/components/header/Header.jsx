/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "../../assets/img/logo.png";

export default (props) => {
  let logged = props.logged;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <a className="navbar-brand" href="#">
          <img id="efeito" src={Logo} width="30" height="30" alt="" />
        </a>
        <a className="navbar-brand text-warning">Contratech</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {logged !== "true" && (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cadastre-se
                </a>
              </li>
            )}
            {logged === "true" && (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Minhas Obras
                </a>
              </li>
            )}
          </ul>

          <Login active="true"></Login>
        </div>
      </nav>
    </div>
  );
};
