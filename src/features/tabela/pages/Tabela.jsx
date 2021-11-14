/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Tabela.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import services from "../../../services/services";
import Etapa from "./etapa/Etapa";
import Servico from "./servico/Servico";

const Tabela = () => {
  const [relatorioObra, setRelatorioObra] = useState({});
  const token = localStorage.getItem("token").replace(/['"]+/g, "");
  let params = useParams();
  const idObra = params.obraId;
  const id = JSON.parse(localStorage.getItem("id"));
  const [nomeEtapa, setNomeEtapa] = useState("");

  useEffect(() => {
    carregarRelatorio();
    return () => console.log("Fim");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const carregarRelatorio = async () => {
    try {
      const obra = await services.relatorioObra(token, id, idObra);
      setRelatorioObra(obra);
      console.log(relatorioObra);
    } catch (error) {
      console.log(error);
    }
  };

  const addEtapa = async () => {
    try {
      const data = { nomeEtapa: nomeEtapa };
      await services.adicionarEtapa(token, data, id, idObra);
      carregarRelatorio();
      setNomeEtapa("");
    } catch (error) {
      console.log(error);
    }
    console.log("passou aqui");
    carregarRelatorio();
  };

  return (
    <div className="h-100" style={{ backgroundColor: 'rgba(255, 218, 106, 1)'}}>
      <div>
        <Breadcrumb item="Minhas Obras" active="Etapas" router="#" />
        <br />
        <Etapa idObra={idObra}/>
      </div>
    </div>
  );
};
export default Tabela;
