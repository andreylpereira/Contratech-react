import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  let logged = props.active;

  return logged === "false" ? (
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
          <div className="row user">andreylpereira</div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-dark mr-2"
        style={{ borderColor: "white" }}
      >
        Log Out
      </button>
    </div>
  );
};
