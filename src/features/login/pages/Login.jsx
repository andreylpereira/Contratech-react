/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Login.css";
import FormLogin from "./FormLogin/FormLogin";
import Card from "../../../components/card/Card";

export default () => {
  return (
    <>
      <div className="page">
        <div className="card-form container-fluid">
          <Card>
            <FormLogin></FormLogin>
          </Card>
        </div>
      </div>
    </>
  );
};