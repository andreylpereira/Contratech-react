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
          className="accordion container-fluid w-75"
          id="accordionExample"
        >
          <div className="card">
            <div className="card-header p-4" id="headingOne">
              <h4 className="row m-0">
                <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                  <div
                    className="arrow oi oi-caret-right p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  ></div>
                </div>
                <div className="col-10 text-dark font-weight-bold h3 p-0 mb-0 d-flex align-items-center">
                  Obra do bernadeu
                </div>
                <div
                  className="col-1 oi oi-pencil p-0 pt-1 d-flex justify-content-end edit"
                  data-toggle="modal"
                  data-target="#modalRenomearEtapa"
                ></div>
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
                      <th scope="row" className="pr-0">
                        <input className="w-auto text-center" type="text" />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row" className="pr-0">
                        <input className="w-auto text-center" type="text" />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row" className="pr-0">
                        <input className="w-auto text-center" type="text" />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row" className="pr-0">
                        <input className="w-auto text-center" type="text" />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
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
            <div className="card-header p-4" id="headingOne">
              <h4 className="row m-0">
                <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                  <div
                    className="arrow oi oi-caret-right p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  ></div>
                </div>
                <div className="col-10 text-dark font-weight-bold h3 p-0 mb-0 d-flex align-items-center">
                  Obra do bernadeu
                </div>
                <div
                  className="col-1 oi oi-pencil p-0 pt-1 d-flex justify-content-end edit"
                  data-toggle="modal"
                  data-target="#modalRenomearEtapa"
                ></div>
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
                      <th scope="row" className="pr-0 pl-1">
                        <input
                          className="w-120px-mobile text-center"
                          type="text"
                        />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row" className="pr-0 pl-1">
                        <input
                          className="w-120px-mobile text-center"
                          type="text"
                        />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row" className="pr-0 pl-1">
                        <input
                          className="w-120px-mobile text-center"
                          type="text"
                        />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <span className="oi oi-x"></span>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <th scope="row" className="pr-0 pl-1">
                        <input
                          className="w-120px-mobile text-center"
                          type="text"
                        />
                      </th>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-75px text-center"
                          type="number"
                          step={0.01}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-45px text-center"
                          type="number"
                          step={1}
                          min={0}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
                        <input
                          className="w-40px text-center"
                          type="number"
                          step={1}
                          min={0}
                          max={100}
                        />
                      </td>
                      <td className="text-center pr-0 pl-0">
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
              <p>Digite o nome da nova Etapa</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark">
                Criar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal para alterar nome etapa */}
      <div
        className="modal"
        id="modalRenomearEtapa"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Renomear Etapa</h5>
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
              <p>Digite o novo nome da Etapa</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark">
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
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
