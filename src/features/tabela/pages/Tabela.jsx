/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Tabela.css";
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

  const lista = mocks.map((o, indexEtapa) => {
    const etapas = o.etapas.map((e, indexServico) => {
      const servicos = e.servicos.map((s) => {
        return (
          <>
            <tr className="bg-light" key={indexServico}>
              <th scope="row" className="pr-0">
                <input className="w-auto text-center shadow" type="text" />
              </th>
              <td className="text-center pr-0 pl-0">
                {s.id}
                <input
                  className="w-75px text-center shadow"
                  type="number"
                  step={0.01}
                  min={0}
                />
              </td>
              <td className="text-center pr-0 pl-0">
                <input
                  className="w-45px text-center shadow"
                  type="number"
                  step={1}
                  min={0}
                />
              </td>
              <td className="text-center pr-0 pl-0">
                <input
                  className="w-40px text-center shadow"
                  type="number"
                  step={1}
                  min={0}
                  max={100}
                />
              </td>
              <td className="text-center pr-0 pl-0">
                <span
                  className="oi oi-x shadow"
                  data-toggle="modal"
                  data-target={`#modalDeletarServico${s.id}`}
                ></span>
              </td>
            </tr>
            {/* modal para alterar nome etapa */}
            <div
              className="modal"
              id={`modalDeletarServico${s.id}`}
              tabindex="-1"
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      Deletar serviço: {s.nomeServico}
                    </h5>
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
                    <p>
                      Você deseja deletar o serviço {s.nomeServico} ({s.id})
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger shadow">
                      Deletar
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
      });
      return (
        <>
          <div
            className="accordion container-fluid w-75 p-0 pb-5"
            id="accordionExample"
            key={indexEtapa}
          >
            <div className="card card-border shadow">
              <div className="card-header p-4" id={`heading${e.id}`}>
                <h4 className="row m-0">
                  <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                    <div
                      className="arrow oi oi-caret-right p-0"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse${e.id}`}
                      aria-expanded="true"
                      aria-controls={`collapse${e.id}`}
                    ></div>
                  </div>
                  <div
                    className="title col-10 text-dark font-weight-bold h3 p-0 mb-0 d-flex align-items-center"
                    data-toggle="modal"
                    data-target={`#modalRenomearEtapa${e.id}`}
                  >
                    {e.nomeEtapa}
                  </div>
                  <div
                    className="col-1 oi oi-pencil p-0 pt-1 d-flex justify-content-end edit"
                    data-toggle="modal"
                    data-target={`#modalRenomearEtapa${e.id}`}
                  ></div>
                </h4>
              </div>

              <div
                id={`collapse${e.id}`}
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby={`heading${e.id}`}
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
                      {servicos}

                      <tr className="bg-light">
                        <td
                          className="addServico"
                          data-toggle="modal"
                          data-target={`#modalAdicionarServico${e.id}`}
                        >
                          {" "}
                          + Adicionar serviço
                        </td>
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
                      className="btn btn-dark m-2 ml-1 shadow"
                      style={{ borderColor: "white" }}
                      data-toggle="modal"
                      data-target={`#modalEditarEtapa${e.id}`}
                    >
                      Editar Etapa
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger shadow ml-1"
                      style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
                      data-toggle="modal"
                      data-target={`#modalExcluirEtapa${e.id}`}
                    >
                      Excluir Etapa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal para alterar nome etapa */}
          <div
            className="modal"
            id={`modalRenomearEtapa${e.id}`}
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Renomear Etapa: {e.nomeEtapa}</h5>
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
                  <input className="w-auto text-center shadow" type="text" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-dark shadow">
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
            id={`modalExcluirEtapa${e.id}`}
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Excluir Etapa: {e.nomeEtapa}</h5>
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
                  <p>Você deseja excluir a Etapa: {e.nomeEtapa}</p>
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

          {/* modal para editar etapa */}
          <div
            className="modal"
            id={`modalEditarEtapa${e.id}`}
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Editar Etapa: {e.nomeEtapa}</h5>
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
                  <p>Etapa {e.nomeEtapa} editada com sucesso!</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark shadow"
                    data-dismiss="modal"
                  >
                    Confirmar
                  </button>
                  {/* <button
                    type="button"
                    className="btn btn-outline-danger shadow"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>  */}
                </div>
              </div>
            </div>
          </div>

          {/* modal para adicionar serviço */}
          <div
            className="modal"
            id={`modalAdicionarServico${e.id}`}
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Adicionar Serviço: {e.nomeEtapa}
                  </h5>
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
                  <p>Foi adicionado um serviço na etapa {e.nomeEtapa}.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark shadow"
                    data-dismiss="modal"
                  >
                    Confirmar
                  </button>
                  {/* <button
                    type="button"
                    className="btn btn-outline-danger shadow"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
    return <div className="cards-etapa">{etapas}</div>;
  });
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
        {lista}
      </div>
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
