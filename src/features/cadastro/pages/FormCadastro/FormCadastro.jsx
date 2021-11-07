/* eslint-disable import/no-anonymous-default-export */
import "./FormCadastro.css";

export default (props) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="font-weight-bold" for="exampleInputEmail1">
            Login:
          </label>
          <div
            className="input-group mb-3 shadow
      "
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text oi oi-people pt-2"
                id="basic-addon1"
              ></span>
            </div>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Login"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="exampleInputEmail1">
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
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nome"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="exampleInputEmail1">
            Sobrenome:
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
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Sobrenome"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="exampleInputEmail1">
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
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="font-weight-bold" for="exampleInputEmail1">
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
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="form-group mb-0">
          <label className="font-weight-bold" for="exampleInputEmail1">
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
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirmar senha"
            />
          </div>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-dark mb-2 shadow
      "
          style={{ borderColor: "white" }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};