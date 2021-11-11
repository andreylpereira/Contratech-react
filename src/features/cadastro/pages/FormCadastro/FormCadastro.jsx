import "./FormCadastro.css";
import React, { useState } from "react";
import services from "../../../../services/services";

const FormCadastro = () => {
  const [login, setLogin] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

  const cadastrar = () => {
    try {
      const data = {
       "login": login,
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email,
        "senha": senha
      }
      services.cadastrar(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
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
          <label className="font-weight-bold" htmlFor="inputNome">
            Nome:
          </label>
          <div
            className="input-group mb-3 shadow
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
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="inputSobrenome">
            Sobrenome:
          </label>
          <div className="input-group mb-3 shadow">
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
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="inputEmail">
            Email:
          </label>
          <div
            className="input-group mb-3 shadow
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
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="inputSenha">
            Senha:
          </label>
          <div
            className="input-group mb-3 shadow
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
        </div>
        <div className="form-group mb-0">
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
