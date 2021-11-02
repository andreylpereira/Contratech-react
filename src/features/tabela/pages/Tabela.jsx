/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Tabela.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

export default () => {
  return (
    <>
      <Breadcrumb item="Minhas Obras" active="Etapas" router="#" />
      <br />
      <div className="container-fluid p-0 w-75 mb-1">
        <button
          type="button"
          className="btn btn-dark shadow-sm"
          style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
          data-toggle="modal"
          data-target="#modalCriarEtapa"
        >
          Nova Etapa
        </button>
      </div>
      <br />
      {/* web */}
      <div className="web">
        <div
          className="accordion container-fluid w-75 p-0"
          id="accordionExample"
        >
          <div className="card">
            <div className="card-header p-2" id="headingOne">
              <h4 className="mb-0 p-0">
                <a
                  className="btn btn-link btn-block text-left p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3 className="text-dark font-weight-bold p-0 mb-0">
                    <div className="arrow oi oi-caret-right"></div>Obra do
                    bernadeu
                  </h3>
                </a>
              </h4>
            </div>

            <div
              id="collapseOne"
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div className="panel-body">
                <table className="table w-100">
                  <thead className="table-light">
                    <tr className="bg-light">
                      <th scope="col">Serviço</th>
                      <th className="text-center" scope="col">
                        Preço
                      </th>
                      <th scope="col" className="text-center">
                        Unid.
                      </th>
                      <th className="text-center" scope="col">
                        %
                      </th>
                      <th className="text-center" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                    <td className="addServico"> + Adicionar serviço</td>
                      <td className="p-0"></td>
                      <td className="p-0"></td>
                      <td className="p-0"></td>
                      <td className="p-0"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="container-fluid mb-2">
                  <button
                    type="submit"
                    className="btn btn-dark m-2 ml-1 shadow-sm"
                    style={{ borderColor: "white" }}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger shadow-sm ml-1"
                    style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile">
        <div
          className="accordion container-fluid w-100 p-0"
          id="accordionExample"
        >
          <div className="card">
            <div className="card-header p-2" id="headingOne">
              <h4 className="mb-0 p-0">
                <a
                  className="btn btn-link btn-block text-left p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3 className="text-dark font-weight-bold p-0 mb-0">
                    <div className="arrow oi oi-caret-right"></div>Obra do
                    bernadeu
                  </h3>
                </a>
              </h4>
            </div>

            <div
              id="collapseOne"
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div className="panel-body">
                <table className="table w-100">
                  <thead className="table-light">
                    <tr className="bg-light">
                      <th scope="col">Serviço</th>
                      <th className="text-center" scope="col">
                        Preço
                      </th>
                      <th scope="col" className="text-center">
                        Unid.
                      </th>
                      <th className="text-center" scope="col">
                        %
                      </th>
                      <th className="text-center" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row">Colocação de piso</th>
                      <td className="text-center">R$: 50,00</td>
                      <td className="text-center">3</td>
                      <td className="text-center">90%</td>
                      <td className="text-center">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light m-2">
                    <td className="addServico"> + Adicionar serviço</td>
                      <td className="p-0"></td>
                      <td className="p-0"></td>
                      <td className="p-0"></td>
                      <td className="p-0"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="container-fluid mb-2">
                  <button
                    type="submit"
                    className="btn btn-dark m-2 ml-1 shadow-sm"
                    style={{ borderColor: "white" }}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger shadow-sm ml-1"
                    style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />


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
              <p>Digite o nome da nova etapa</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark">
                Criar
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


