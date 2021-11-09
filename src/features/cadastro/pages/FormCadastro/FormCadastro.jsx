import "./FormCadastro.css";
import React from "react";
class FormCadastro extends React.Component {
  state = {
    login: "",
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    senhaConfirmar: "",
  };

  cadastrar = () => {
    console.log("Cadastro", this.state);
    
  };

  render() {
    return (
      <div>
        <form>
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
                value={this.state.login}
                onChange={(e) => this.setState({ login: e.target.value })}
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
                value={this.state.nome}
                onChange={(e) => this.setState({ nome: e.target.value })}
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
                value={this.state.sobrenome}
                onChange={(e) => this.setState({ sobrenome: e.target.value })}
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
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
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
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
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
                value={this.state.confirmarSenha}
                onChange={(e) =>
                  this.setState({ senhaConfirmar: e.target.value })
                }
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
            onClick={this.cadastrar}
            style={{ borderColor: "white" }}
          >
            Cadastrar
          </button>
        </form>
      </div>
    );
  }
}
export default FormCadastro;
