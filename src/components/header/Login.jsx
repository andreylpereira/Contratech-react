import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/AuthContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { authenticated, user, handleLogOut } = useContext(Context);

  return !authenticated ? (
    <div className="form-inline my-2 my-lg-0">
      <button
        type="button"
        className="btn btn-dark"
        style={{ borderColor: "white" }}
      >
        <Link to="/login">Login</Link>
      </button>
    </div>
  ) : (
    <div className="form-inline my-2 my-lg-0">
      <div className="col mr-2 desktop">
        <div className="desktop">
          <div className="row welcome">Seja bem-vindo,</div>
          <div className="row user">{user}</div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-dark mr-2"
        style={{ borderColor: "white" }}
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};
