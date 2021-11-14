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

  const etapas = relatorioObra["etapas"];

  return (
    <>
      <div className="page">
        <Breadcrumb item="Minhas Obras" active="Etapas" router="#" />
        <br />
        <div className="container-fluid p-0 w-75 pb-4">
          <button
            type="button"
            className="btn btn-dark shadow"
            style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
            data-toggle="modal"
            data-target="#modalCriarEtapa"
          >
            Nova Etapa
          </button>
        </div>
        {
        etapas && etapas.map((e) => (  
          <Etapa idObra={idObra} idEtapa={`${e.id}`} nomeEtapa={`${e.nomeEtapa}`}>
            <Servico/>
          </Etapa>
        ))}
      </div>
      {/* modal para criar etapa */}
     {/* <div className="modal" id="modalCriarEtapa" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Nova Etapa</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Digite o nome da nova Etapa:</p>
              <p>
                <input className="w-auto text-center shadow" type="text" />
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark shadow">
                Criar
              </button>
              <button
                type="button"
                className="btn btn-outline-danger shadow"
                data-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
        </div> */}
    </>
  );
};
export default Tabela;
