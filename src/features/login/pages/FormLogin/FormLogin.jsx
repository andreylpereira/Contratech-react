import "./FormLogin.css";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
class FormLogin extends React.Component {
  state = {
    login: "",
    senha: ""
  };

  entrar = () => {
    axios.post("http://localhost:8080/api/seguranca/login", {
        login: this.state.login,
        senha: this.state.senha,
      })
      .then((response) => {
        console.log('deu bom');
        console.log(response.data);
        console.log(response.data.token)
        alert('teste')
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
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
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
                type="password"
                className="form-control"
                id="inputSenha"
                placeholder="Senha"
              />
            </div>
            <div className="row cadastrar container-fluid d-inline p-0 m-0 mb-4">
              <p>
                Não tem uma conta?<NavLink to="/cadastro"> Crie uma</NavLink>!
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark mb-2 shadow container-fluid"
            style={{ borderColor: "white" }}
            onClick={this.entrar}
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
export default FormLogin;
