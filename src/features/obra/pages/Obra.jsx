/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Obra.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import services from "../../../services/services";

const Obra = () => {
  const [obras, setObras] = useState([]);
  const token = localStorage.getItem("token").replace(/['"]+/g, "");
  const id = JSON.parse(localStorage.getItem("id"));

  const [novaObra, setNovaObra] = useState("");

  useEffect(() => {
    carregarObras();
    return () => console.log("Fim");
  }, []);

  // useEffect(() => {
  //   addObra();
  //   carregarObras();
  //   return () => console.log("Fim");
    
  // }, []);

  const carregarObras = async () => {
    try {
      const obras = await services.buscarObras(token, id);
      console.log(obras);
      setObras(obras);
    } catch (error) {
      console.log(error);
    }
  };

  const addObra = () => {
    try {
      const data = {nomeObra: novaObra,}
      services.adicionarObra(token, data, id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const goToEtapa = () => {
    console.log(token);
    navigate(`/obras/${id}/etapas`);
  };

  const goToRelatorio = () => {
    navigate(`/obras/${id}/relatorio`);
  };

  const lista =
    obras &&
    obras.map((o) => (
      <tr className="bg-light text-center" data key={o.id}>
        <th>
          <div className="float-left row ml-1">
            <div
              className="pt-2 cursor"
              data-toggle="modal"
              data-target={`#modalRenomearObra${o.id}`}
            >
              {o.nomeObra}
            </div>
            <div
              className="oi oi-pencil edit ml-1 pt-2"
              data-toggle="modal"
              data-target={`#modalRenomearObra${o.id}`}
            ></div>
          </div>
        </th>
        <td>
          <div className="float-right">
            <button
              type="button "
              className="btn btn-dark m-1 shadow"
              onClick={goToEtapa}
            >
              Editar
            </button>
            <button
              type="button"
              className="btn btn-danger m-1 shadow"
              data-toggle="modal"
              data-target={`#modalDeletarObra${o.id}`}
            >
              Excluir
            </button>
            <button
              type="button"
              className="btn btn-light m-1 shadow"
              style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
              onClick={goToRelatorio}
            >
              Relatório
            </button>
          </div>
        </td>
        {/* modal para renomear obra */}
        <div
          className="modal"
          id={`modalRenomearObra${o.id}`}
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Renomear Obra {o.nomeObra}</h5>
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
                <p className="text-left">Digite o novo nome da Obra:</p>
                <p>
                  <input className="w-auto text-center shadow" type="text" />
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark shadow">
                  Salvar
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
        </div>
        {/* modal para excluir obra */}
        <div
          className="modal"
          id={`modalDeletarObra${o.id}`}
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Excluir Obra {o.nomeObra}</h5>
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
                <p className="text-left">
                  Você deseja excluir a obra {o.nomeObra}?
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger shadow">
                  Excluir
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
        </div>
      </tr>
    ));

  return (
    <>
      <div className="page">
        <Breadcrumb unique="Minhas obras" />
        <br />
        <div className="container-fluid mt-2 pl-0 w-75">
          <button
            type="submit"
            className="btn btn-dark mb-2 shadow"
            data-toggle="modal"
            data-target="#modalCriarObra"
          >
            Nova Obra
          </button>
        </div>

        <div className="card card-border bg-light shadow container-fluid mt-2 mb-5 w-75">
          <table className="table table-desktop">
            <thead className="table-light">
              <tr className="bg-light">
                <th>
                  <h4
                    style={{ width: "130px" }}
                    className="card-title font-weight-bold mt-2"
                  >
                    Minhas obras
                  </h4>
                </th>
                <th></th>
              </tr>
            </thead>
            {obras && <tbody>{lista}</tbody>}
          </table>
        </div>
      </div>
      {/* modal para criar obra */}
      <div className="modal" id="modalCriarObra" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Nova obra</h5>
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
              <p>Digite o nome da nova Obra:</p>
              <p>
                <input
                  value={novaObra}
                  onChange={(e) => setNovaObra(e.target.value)}
                  className="w-auto text-center shadow"
                  type="text"
                />
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark shadow" onClick={addObra}>
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
      </div>
    </>
  );
};

export default Obra;
