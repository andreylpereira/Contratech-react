/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Tabela.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import Etapa from "./etapa/Etapa";

const Tabela = () => {
  let params = useParams();
  const idObra = params.obraId;
 
  return (
    <div
      className="h-100"
      style={{ backgroundColor: "rgba(255, 218, 106, 1)" }}
    >
      <div>
        <Breadcrumb item="Minhas Obras" active="Etapas" router={`/obras`} />
        <br />
        <Etapa idObra={idObra} />
      </div>
    </div>
  );
};
export default Tabela;
