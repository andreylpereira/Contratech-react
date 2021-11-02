/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Obra.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

export default () => {
  return (
    <>
      <Breadcrumb unique="Minhas obras" />
      <br />
      <div className="container-fluid mt-2 pl-0 w-75">
        <button
          type="submit"
          className="btn btn-dark mb-2 shadow-sm"
          data-toggle="modal"
          data-target="#modalCriarObra"
        >
          Nova Obra
        </button>
      </div>

      <div className="card bg-light shadow container-fluid mt-2 mb-5 w-75">
        <table className="table table-desktop">
          <thead className="table-light">
            <tr className="bg-light">
              <th>
                <h4 className="card-title font-weight-bold mt-2">
                  Minhas obras
                </h4>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light text-center">
              <th>
                <div className="float-left row ml-1">
                  <div
                    className="pt-2 cursor"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  >
                    Edificio Outono 5
                  </div>
                  <div
                    className="oi oi-pencil edit ml-1 pt-2"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  ></div>
                </div>
              </th>
              <td>
                <div className="float-right">
                  <button type="button " className="btn btn-dark m-1 shadow-sm">
                    Editar
                  </button>
                  <button
                    type="button "
                    className="btn btn-danger m-1 shadow-sm"
                  >
                    Excluir
                  </button>
                  <button
                    type="button"
                    className="btn btn-light m-1 shadow-sm"
                    style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                  >
                    Relatório
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-light text-center">
              <th>
                <div className="float-left row ml-1">
                  <div
                    className="pt-2 cursor"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  >
                    Edificio Outono 5
                  </div>
                  <div
                    className="oi oi-pencil edit ml-1 pt-2"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  ></div>
                </div>
              </th>
              <td>
                <div className="float-right">
                  <button type="button " className="btn btn-dark m-1 shadow-sm">
                    Editar
                  </button>
                  <button
                    type="button "
                    className="btn btn-danger m-1 shadow-sm"
                  >
                    Excluir
                  </button>
                  <button
                    type="button "
                    className="btn btn-light m-1 shadow-sm"
                    style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                  >
                    Relatório
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-light text-center">
              <th>
                <div className="float-left row ml-1">
                  <div
                    className="pt-2 cursor"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  >
                    Edificio Outono 5
                  </div>
                  <div
                    className="oi oi-pencil edit ml-1 pt-2"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  ></div>
                </div>
              </th>
              <td>
                <div className="float-right">
                  <button type="button " className="btn btn-dark m-1 shadow-sm">
                    Editar
                  </button>
                  <button
                    type="button "
                    className="btn btn-danger m-1 shadow-sm"
                  >
                    Excluir
                  </button>
                  <button
                    type="button "
                    className="btn btn-light m-1 shadow-sm"
                    style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                  >
                    Relatório
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table table-mobile">
          <thead className="table-light">
            <tr className="bg-light">
              <th>
                <h4 className="card-title font-weight-bold mt-2">
                  Minhas obras
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light text-center">
              <th>
                <div
                  className="font-weight-bold cursor mb-2"
                  data-toggle="modal"
                  data-target="#modalRenomearObra"
                >
                  Edificio Outono 5
                  <div
                    className="oi oi-pencil edit ml-1"
                    data-toggle="modal"
                    data-target="#modalRenomearObra"
                  />
                </div>
                <div>
                  <div className="row justify-content-center">
                    <button
                      type="button"
                      className="btn btn-dark m-1 shadow-sm"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger m-1 shadow-sm"
                    >
                      Excluir
                    </button>
                    <button
                      type="button"
                      className="btn btn-light m-1 shadow-sm"
                      style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                    >
                      Relatório
                    </button>
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
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
              <p>Digite o nome da nova obra</p>
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

      {/* modal para renomear obra */}
      <div className="modal" id="modalRenomearObra" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Renomear Obra</h5>
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
              <p>Digite o novo nome da Obra</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark">
                Salvar
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
