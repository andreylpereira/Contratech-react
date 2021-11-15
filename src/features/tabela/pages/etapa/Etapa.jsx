import React, { useState, useEffect } from "react";
import services from "../../../../services/services";
import Servico from "../servico/Servico";

const Etapa = (props) => {
  const [etapas, setEtapas] = useState([]);
  const obraId = props.idObra;
  const [novoNomeEtapa, setNovoNomeEtapa] = useState("");
  const token = localStorage.getItem("token").replace(/['"]+/g, "");
  const id = JSON.parse(localStorage.getItem("id"));
  const [nomeEtapa, setNomeEtapa] = useState("");

  /*
    const [dadosObra, setDadosObra] = useState({});
    const token = localStorage.getItem("token").replace(/['"]+/g, "");
    const id = JSON.parse(localStorage.getItem("id"));

    useEffect(() => {
      carregarDadosObra();
      return () => console.log("Fim");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const carregarDadosObra = async () => {
      try {
        const dado = await services.relatorioObra(token, id, etapaId);
        setDadosObra(dado);
        console.log(dadosObra);
      } catch (error) {
        console.log(error);
      }
    }; 
    const etapas = dadosObra["etapas"];
    */

  useEffect(() => {
    getEtapas();
    return () => console.log("Fim");
  }, []);

  const delEtapa = async (etapaId) => {
    const idEtapa = etapaId;
    try {
      await services.excluirEtapa(token, id, obraId, idEtapa);
      getEtapas();
    } catch (error) {
      console.log(error);
    }
  };

  const putEtapa = async (etapaId) => {
    const idEtapa = etapaId;
    const data = { nomeEtapa: novoNomeEtapa };

    try {
      await services.renomearEtapa(token, data, id, obraId, idEtapa);
      setNovoNomeEtapa("");
      getEtapas();
    } catch (error) {
      console.log(error);
    }
  };

  const addEtapa = async () => {
    try {
      const data = { nomeEtapa: nomeEtapa };
      await services.adicionarEtapa(token, data, id, obraId);
      getEtapas();
      setNomeEtapa("");
    } catch (error) {
      console.log(error);
    }
  };

  const getEtapas = async () => {
    try {
      const listaEtapas = await services.buscarEtapas(token, id, obraId);
      setEtapas(listaEtapas);
      console.log(listaEtapas);
      console.log(etapas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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

        {/* modal para criar etapa */}
        <div className="modal" id="modalCriarEtapa" tabindex="-1" role="dialog">
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
                  <input
                    className="w-auto text-center shadow"
                    type="text"
                    value={nomeEtapa}
                    onChange={(e) => setNomeEtapa(e.target.value)}
                  />
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark shadow"
                  data-dismiss="modal"
                  onClick={addEtapa}
                >
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
      </div>
      {etapas.map(({ id, nomeEtapa }) => (
        <div>
          <div
            className="accordion container-fluid w-75 p-0 pb-5"
            id="accordionExample"
          >
            <div className="card card-border shadow">
              <div className="card-header" id={`heading${id}`}>
                <h4 className="p-0 m-0">
                  <div className="row">
                    <div
                      className="row col-10 title text-dark font-weight-bold h3 p-0 mb-1"
                      data-toggle="modal"
                    >
                      {" "}
                      <div
                        className="arrow oi oi-caret-right p-0 pl-4 pt-2"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse${id}`}
                        aria-expanded="true"
                        aria-controls={`collapse${id}`}
                      ></div>
                      <div className="pl-2 pt-1">{nomeEtapa}</div>
                    </div>
                    <div
                      style={{ width: "100px" }}
                      className="row col-2 p-0 d-flex justify-content-end"
                    >
                      <div
                        className="oi oi-pencil p-0 pt-2 d-flex justify-content-end edit"
                        data-toggle="modal"
                        data-target={`#modalRenomearEtapa${id}`}
                      />
                      <div
                        className="oi oi-x  p-0 pt-1 ml-2 d-flex justify-content-end"
                        data-toggle="modal"
                        data-target={`#modalExcluirEtapa${id}`}
                      />
                    </div>
                  </div>
                </h4>
              </div>

              <div
                id={`collapse${id}`}
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby={`heading${id}`}
              >
                <div className="panel-body">
                  <Servico idObra={obraId} idEtapa={id} />
                </div>
              </div>
            </div>
          </div>
          {/* modal para alterar nome etapa */}
          <div
            className="modal"
            id={`modalRenomearEtapa${id}`}
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Renomear Etapa: {nomeEtapa}</h5>
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
                  <p>Digite o novo nome da Etapa:</p>
                  <input
                    className="w-auto text-center shadow"
                    type="text"
                    value={novoNomeEtapa}
                    onChange={(e) => setNovoNomeEtapa(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark shadow"
                    data-dismiss="modal"
                    onClick={() => {
                      var etapaId = id;
                      putEtapa(etapaId);
                    }}
                  >
                    Editar
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
          {/* modal para excluir etapa */}
          <div
            className="modal"
            id={`modalExcluirEtapa${id}`}
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Excluir Etapa: {nomeEtapa}</h5>
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
                  <p>Você deseja excluir a Etapa: {nomeEtapa}?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger shadow"
                    data-dismiss="modal"
                    onClick={() => {
                      var etapaId = id;
                      delEtapa(etapaId);
                    }}
                  >
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
        </div>
      ))}
    </>
  );
};

export default Etapa;
