/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
export default (props) => {
  let logged = props.logged;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="navbar-brand">
          <img id="efeito" src={Logo} width="30" height="30" alt="" />
        </div>
        <div className="navbar-brand text-warning"><Link to="/home" className="text-warning">Contratech</Link></div>
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
            <li className="nav-item">
              <div className="nav-link active">
              <a><Link to="/home">Home</Link></a>
                <span className="sr-only">(current)</span>
              </div>
            </li>
            {logged !== "true" && (
              <li className="nav-item">
                <diva className="nav-link">
                  <Link to="/cadastro">Cadastre-se</Link>{" "}
                </diva>
              </li>
            )}
            {logged === "true" && (
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/obras">Minhas Obras</Link>
                </div>
              </li>
            )}
          </ul>

          <Login active="true"></Login>
        </div>
      </nav>
    </div>
  );
};
