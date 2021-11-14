/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { Context } from '../../context/AuthContext'


const Header = (props) => {
  const { authenticated } = useContext(Context);
  
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="navbar-brand">
            <img id="efeito" src={Logo} width="30" height="30" alt="" />
          </div>
          <div className="navbar-brand text-warning">
            <NavLink to="/home" className="text-warning">
              Contratech
            </NavLink>
          </div>
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
                <div className="nav-NavLink link-nav">
                  <NavLink to="/home">Home</NavLink>
                  <span className="sr-only">(current)</span>
                </div>
              </li>
              {!authenticated && (
                <li className="nav-item">
                  <div className="nav-NavLink link-nav">
                    <NavLink to="/cadastro">Cadastre-se</NavLink>
                  </div>
                </li>
              )}
              {authenticated && (
                <li className="nav-item">
                  <div className="nav-NavLink link-nav">
                    <NavLink to="/obras">Minhas Obras</NavLink>
                  </div>
                </li>
              )}
            </ul>
            <Login></Login>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
