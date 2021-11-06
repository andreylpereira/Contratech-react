/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Obra.css";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

export default () => {
  let mocks = [
    {
      id: 1,
      nomeObra: "Residencial Itambé",
      percentualMedioFinal: 0,
      valorTotalFinal: 0.0,
      etapas: [
        {
          id: 1,
          nomeEtapa: "Etapa 1 da Obra 1",
          percentualMedio: 0,
          valorTotal: 0.0,
          servicos: [
            {
              id: 1,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 2,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 3,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 7,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 8,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 9,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
          ],
        },
        {
          id: 2,
          nomeEtapa: "Etapa 2 da Obra 1",
          percentualMedio: 0,
          valorTotal: 0.0,
          servicos: [
            {
              id: 4,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 5,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 6,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 10,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 11,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 12,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      nomeObra: "Residencial Itambé 2",
      percentualMedioFinal: 0,
      valorTotalFinal: 0.0,
      etapas: [
        {
          id: 3,
          nomeEtapa: "Etapa 1 da Obra 2",
          percentualMedio: 0,
          valorTotal: 0.0,
          servicos: [
            {
              id: 13,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 14,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 15,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
          ],
        },
        {
          id: 4,
          nomeEtapa: "Etapa 2 da Obra 2",
          percentualMedio: 0,
          valorTotal: 0.0,
          servicos: [
            {
              id: 16,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 17,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
            {
              id: 18,
              nomeServico: "Serviço",
              preco: 0.0,
              quantidade: 0,
              porcentagem: 0,
            },
          ],
        },
      ],
    },
  ];
  function name() {
    console.log(mocks);
  }

  const lista = mocks.map((item) => (
    <tr className="bg-light text-center" data>
      <th>
        <div className="float-left row ml-1">
          <div
            className="pt-2 cursor"
            data-toggle="modal"
            data-target={`#modalRenomearObra${item.id}`}
          >
            {item.nomeObra}
          </div>
          <div
            className="oi oi-pencil edit ml-1 pt-2"
            data-toggle="modal"
            data-target={`#modalRenomearObra${item.id}`}
          ></div>
        </div>
      </th>
      <td>
        <div className="float-right">
          <button type="button " className="btn btn-dark m-1 shadow">
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger m-1 shadow"
            data-toggle="modal"
            data-target={`#modalDeletarObra${item.id}`}
          >
            Excluir
          </button>
          <button
            type="button"
            className="btn btn-light m-1 shadow"
            style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
          >
            Relatório
          </button>
        </div>
      </td>
      {/* modal para renomear obra */}
      <div
        className="modal"
        id={`modalRenomearObra${item.id}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Renomear Obra {item.nomeObra}</h5>
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
        id={`modalDeletarObra${item.id}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Excluir Obra {item.nomeObra}</h5>
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
                Você deseja excluir a obra {item.nomeObra}?
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
            onClick={name}
          >
            Nova Obra
          </button>
        </div>

        <div className="card card-border bg-light shadow container-fluid mt-2 mb-5 w-75">
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
            <tbody>{lista}</tbody>
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
                      <button type="button" className="btn btn-dark m-1 shadow">
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger m-1 shadow"
                      >
                        Excluir
                      </button>
                      <button
                        type="button"
                        className="btn btn-light m-1 shadow"
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
      </div>
    </>
  );
};
