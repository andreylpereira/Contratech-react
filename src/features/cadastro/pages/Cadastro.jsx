/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import { useState } from "react";
import "./Cadastro.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import FormCadastro from "./FormCadastro/FormCadastro";
import Card from "../../../components/card/Card";

export default () => {
  return (
    <>
      <div className="pageCadastro pb-5">
        <Breadcrumb unique="Cadastro de usuário" />
        <div className="w-75 p-0 container-fluid">
          <Card className="" titulo="Cadastro de usuário">
            <FormCadastro></FormCadastro>
          </Card>
        </div>
      </div>
    </>
  );
};