import "./FormLogin.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const FormLogin = (props) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [msgLogin, setMsgLogin] = useState("");

  const entrar = () => {
    axios
      .post("http://localhost:8080/api/seguranca/login", {
        login: login,
        senha: senha,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.token);
        goToHome();
      })
      .catch((erro) => {
        console.log(erro);
        setMsgLogin('* Login e/ou senha invalido(s)!!!')
        setLogin('');
        setSenha('');
        setTimeout(function(){ setMsgLogin('') }, 3000)
      });
  };

  return (
    <div>
      <div className="container-fluid p-0 d-flex justify-content-center">
        <img
          src={require("../../../../assets/img/login.png").default}
          className="mt-3 mb-3"
          width="90px"
          height="90px"
          alt=""
        />
      </div>

      <h3 className="card-title font-weight-bold text-center">Login</h3>
      {/* form */}
      <div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="inputLogin">
            Login:
          </label>
          <div className="input-group mb-3 shadow">
            <div className="input-group-prepend">
              <span
                className="input-group-text oi oi-people pt-2"
                id="basic-addon1"
              ></span>
            </div>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              className="form-control"
              id="inputLogin"
              aria-describedby="emailHelp"
              placeholder="Login"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="inputSenha">
            Senha:
          </label>
          <div className="input-group mb-1 shadow">
            <div className="input-group-prepend">
              <span
                className="input-group-text oi oi-key pt-2"
                id="basic-addon1"
              ></span>
            </div>
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              className="form-control"
              id="inputSenha"
              placeholder="Senha"
            />
          </div>
          <div className="row cadastrar container-fluid d-inline p-0 m-0 mb-4">
            <p className="mb-0">
              Não tem uma conta?<NavLink to="/cadastro"> Crie uma</NavLink>!
            </p>
          </div>
          <div className="row cadastrar container-fluid d-inline p-0 m-0 mb-4">
            <p style={{height: '16px'}} className="font-italic mb-0 text-danger h">
              {msgLogin}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-dark mb-2 shadow container-fluid"
          style={{ borderColor: "white" }}
          onClick={entrar}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};
export default FormLogin;
