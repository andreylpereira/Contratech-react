import "./FormCadastro.css";
import React, { useState } from "react";
import validator from "validator";
import services from "../../../../services/services";
import { useNavigate } from "react-router-dom";


const FormCadastro = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  //msgs error
  const [msgLogin, setMsgLogin] = useState("");
  const [msgNome, setMsgNome] = useState("");
  const [msgSobrenome, setMsgSobrenome] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgSenha, setMsgSenha] = useState("");
  const [msgSenhaConfirmacao, setMsgSenhaConfirmacao] = useState("");

  const cadastrar = () => {
    if (cadastrar) {
      if (login === "") {
        setMsgLogin("* Campo login em branco!");
      } else if (msgLogin.length > 20 || msgLogin.length < 6) {
        setMsgLogin("* Campo login deve estar entre 6 a 20 caracteres!");
      }

      if (nome === "") {
        setMsgNome("* Campo nome em branco!");
      } else if (nome.length > 30) {
        setMsgNome("* Campo nome deve ter no maximo 30 caracteres!");
      }

      if (sobrenome === "") {
        setMsgSobrenome("* Campo sobrenome em branco!");
      } else if (sobrenome.length > 30) {
        setMsgSobrenome("* Campo sobrenome deve ter no maximo 30 caracteres!");
      }

      if (email.length > 0) {
          if (!validator.isEmail(email)) {
            setMsgEmail("* Digite um e-mail válido!");
          }
      } else {
        setMsgEmail("* Campo email em branco!");
      }

      if (senha === "") {
        setMsgSenha("* Campo senha em branco!");
      } else if (senha.length > 10 || senha.length < 6) {
        setMsgSenha("* Campo senha deve estar entre 6 a 10 caracteres!");
      }

      if (senhaConfirmacao === "") {
        setMsgSenhaConfirmacao("* Campo senha em branco!");
      } else if (senhaConfirmacao.length > 10 || senhaConfirmacao.length < 6) {
        setMsgSenhaConfirmacao("* Campo senha deve estar entre 6 a 10 caracteres!");
      }

      if (senha !== senhaConfirmacao) {
        setMsgSenha("* Campo senha e confirme sua senha não são iguais!");
        setMsgSenhaConfirmacao("* Campo senha e confirme sua senha não são iguais!");
      }

      try {
        const data = {
          login: login,
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
        };
        services.cadastrar(data);
        goToHome();

      } catch (error) {
        console.log(error);
        
      }
    }
  };

  
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>
        <div className="form-group mb-2">
          <label className="font-weight-bold" htmlFor="inputLogin">
            Login:
          </label>
          <div className="input-group mb-1 shadow">
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
          <p
            style={{ height: "8px" }}
            className="error-msg font-italic mb-0 text-danger h"
          >
            {msgLogin}
          </p>
        </div>
        <div className="form-group mb-2">
          <label className="font-weight-bold" htmlFor="inputNome">
            Nome:
          </label>
          <div
            className="input-group mb-1 shadow
      "
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text oi oi-person pt-2"
                id="basic-addon1"
              ></span>
            </div>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              className="form-control"
              id="inputNome"
              aria-describedby="emailHelp"
              placeholder="Nome"
            />
          </div>
          <p
            style={{ height: "8px" }}
            className="error-msg font-italic mb-0 text-danger h"
          >
            {msgNome}
          </p>
        </div>
        <div className="form-group mb-2">
          <label className="font-weight-bold" htmlFor="inputSobrenome">
            Sobrenome:
          </label>
          <div className="input-group mb-1 shadow">
            <div className="input-group-prepend">
              <span
                className="input-group-text oi oi-person pt-2"
                id="basic-addon1"
              ></span>
            </div>
            <input
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              type="text"
              className="form-control"
              id="inputSobrenome"
              aria-describedby="emailHelp"
              placeholder="Sobrenome"
            />
          </div>
          <p
            style={{ height: "8px" }}
            className="error-msg font-italic mb-0 text-danger h"
          >
            {msgSobrenome}
          </p>
        </div>

        <div className="form-group mb-2">
          <label className="font-weight-bold" htmlFor="inputEmail">
            Email:
          </label>
          <div
            className="input-group mb-1 shadow
      "
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text font-weight-bold text-dark"
                id="basic-addon1"
              >
                @
              </span>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <p
            style={{ height: "8px" }}
            className="error-msg font-italic mb-0 text-danger h"
          >
            {msgEmail}
          </p>
        </div>

        <div className="form-group mb-2">
          <label className="font-weight-bold" htmlFor="inputSenha">
            Senha:
          </label>
          <div
            className="input-group mb-1 shadow
      "
          >
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
          <p
            style={{ height: "8px" }}
            className="error-msg font-italic mb-0 text-danger h"
          >
            {msgSenha}
          </p>
        </div>

        <div className="form-group mb-2">
          <label className="font-weight-bold" htmlFor="inputConfirmaSenha">
            Confirme sua senha:
          </label>
          <div
            className="input-group shadow
      "
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text oi oi-key pt-2"
                id="basic-addon1"
              ></span>
            </div>
            <input
              value={senhaConfirmacao}
              onChange={(e) => setSenhaConfirmacao(e.target.value)}
              type="password"
              className="form-control"
              id="inputConfirmaSenha"
              placeholder="Confirmar senha"
            />
          </div>
          <p
            style={{ height: "8px" }}
            className="error-msg font-italic mb-0 text-danger h"
          >
            {msgSenhaConfirmacao}
          </p>
        </div>

        <br />
        <button
          type="submit"
          className="btn btn-dark mb-2 shadow"
          onClick={cadastrar}
          style={{ borderColor: "white" }}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};
export default FormCadastro;
