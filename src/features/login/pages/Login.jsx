/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Login.css'

export default () => {

  return (
    <>
      <br />
      <div>
        <div className="card card-border shadow container-fluid login-card mb-5">
          <div className="card-body">
          <div className="container-fluid p-0 d-flex justify-content-center">
            <img src={require('../../../assets/img/login.png').default}  className="mt-3 mb-3" width="90px" height="90px" alt=""/>

        </div>

            <h3 className="card-title font-weight-bold text-center">Login</h3>

            {/* form */}
            <form>
          <div className="form-group">
            <label className="font-weight-bold" for="exampleInputEmail1"
              >Login:</label
            >
            <div className="input-group mb-3 shadow">
              <div className="input-group-prepend">
                <span
                  className="input-group-text oi oi-people pt-2"
                  id="basic-addon1"
                ></span>
              </div>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Login"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="font-weight-bold" for="exampleInputEmail1"
              >Senha:</label
            >
            <div className="input-group mb-1 shadow">
              <div className="input-group-prepend">
                <span
                  className="input-group-text oi oi-key pt-2"
                  id="basic-addon1"
                ></span>
              </div>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Senha"
              />
            </div>
            <div className="row cadastrar container-fluid p-0 m-0 mb-4">
                <p>Não tem uma conta?<a> Crie uma!</a></p>
              </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark mb-2 shadow container-fluid"
            style={{borderColor: 'white'}}
          >
            Entrar
          </button>
        </form>
          </div>
        </div>
      </div>
    </>
  );
};