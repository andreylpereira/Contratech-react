/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "../../assets/img/logo.png";

export default (props) => {
  let logged = props.active;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <a class="navbar-brand" href="#">
          <img src={Logo} width="30" height="30" alt="" />
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

          <Login active="true" />
          {/* <div className="form-inline my-2 my-lg-0">
            
            <div className="col mr-2 desktop">
              <div className="desktop">
                <div className="row welcome">Seja bem-vindo,</div>
                <div className="row user">Andrey Luiz Pereira</div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-dark mr-2"
              style={{ borderColor: "white" }}
            >
              Log Out
            </button>

            <button
              type="button"
              className="btn btn-dark"
              style={{ borderColor: "white" }}
            >
              Login
            </button>

          </div>  */}
        </div>
      </nav>
    </div>
  );
};

{
  /* <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div class="container-fluid">
          <a class="navbar-brand text-warning">Contratech</a>
          <button
            class="navbar-toggler mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page">Cadastre-se</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page">Minhas Obras</a>
              </li>
            </ul>
          </div>
          <form class="d-inline-flex float-right">

            <div class="col mr-2 login">
              <div class="desktop">
                <div class="row">Seja bem-vindo,</div>
                <div class="row">Andrey Luiz Pereira</div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-dark mr-2"
                style={{borderColor: 'white'}}
            >
              Log Out
            </button>
            {/* <button
              type="button"
              class="btn btn-dark"
              style={{borderColor: "white"}}
            >
              Login
            </button> 
          </form>
        </div>
      </nav> */
}
