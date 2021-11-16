/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";
import services from "../../../../services/services";

const Servico = (props) => {
  const idObra = props.idObra;
  const idEtapa = props.idEtapa;
  const nomeEtapa = props.nomeEtapa;
  const token = localStorage.getItem("token").replace(/['"]+/g, "");
  const id = JSON.parse(localStorage.getItem("id"));
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    getServicos();
    console.log(servicos);
  }, []);

  const getServicos = async () => {
    try {
      const listaServicos = await services.buscarServicos(
        token,
        id,
        idObra,
        idEtapa
      );
      setServicos(
        listaServicos.sort((a, b) => (a.nomeServico > b.nomeServico && 1) || -1)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addServico = async () => {
    try {
      await services.adicionarServico(token, id, idObra, idEtapa);
      getServicos();
    } catch (error) {
      console.log(error);
    }
  };

  const delServico = async (servicoId) => {
    const idServico = servicoId;
    try {
      await services.excluirServico(token, id, idObra, idEtapa, idServico);
      getServicos();
    } catch (error) {
      setServicos([]);
      console.log(error);
    }
  };

  const putServicos = async () => {
    const data = servicos;

    const validacaoNome = data.filter(
      (x) => x.nomeServico.length >= 5 && x.nomeServico.length <= 35
    );

    const validacaoPreco = data.filter((x) => x.preco >= 0);

    const validacaoPorcentagem = data.filter(
      (x) => typeof x.porcentagem !== "string"
    );

    const validacaoQuantidade = data.filter(
      (x) => x.quantidade >= 0 && x.quantidade <= 99
    );

    try {
      if (
        validacaoNome.length === data.length &&
        validacaoPreco.length === data.length &&
        validacaoPorcentagem.length === data.length &&
        validacaoQuantidade.length === data.length
      ) {
        await services.atualizarServicos(token, data, id, idObra, idEtapa);
        getServicos();
      } else {
        if (validacaoNome.length !== data.length) {
          alert("* O nome do serviço deve ter entre 5 e 35 caracteres!");
        }

        if (validacaoPreco.length !== data.length) {
          alert("* O preço do serviço deve ser maior que ZERO!");
        }

        if (validacaoPorcentagem.length !== data.length) {
          alert("* A porcentagem deve ser um numero inteiro entre 0 e 100!");
        }

        if (validacaoQuantidade.length !== data.length) {
          alert("* A quantidade deve ser entre 0 e 99!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (id, event) => {
    const values = [...servicos];
    values[id][event.target.name] = event.target.value;
    setServicos(values);
  };

  return (
    <>
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
          {servicos.map((data, index) => (
            <tr className="bg-light" key={index}>
              <th scope="row" className="pr-0">
                <input
                  name="nomeServico"
                  onChange={(event) => handleChangeInput(index, event)}
                  value={data.nomeServico}
                  id={`nome${id}`}
                  className="w-auto text-center shadow"
                  type="text"
                />
              </th>
              <td className="text-center pr-0 pl-0">
                <input
                  name="preco"
                  onChange={(event) => handleChangeInput(index, event)}
                  value={data.preco}
                  id={`preco${id}`}
                  className="w-75px text-center shadow"
                  type="number"
                  step={0.01}
                  min={0}
                />
              </td>
              <td className="text-center pr-0 pl-0">
                <input
                  name="quantidade"
                  onChange={(event) => handleChangeInput(index, event)}
                  value={data.quantidade}
                  id={`quantidade${id}`}
                  className="w-45px text-center shadow"
                  type="number"
                  step={1}
                  min={0}
                />
              </td>
              <td className="text-center pr-0 pl-0">
                <input
                  name="porcentagem"
                  onChange={(event) => handleChangeInput(index, event)}
                  value={data.porcentagem}
                  id={`porcentagem${id}`}
                  className="w-40px text-center shadow"
                  type="number"
                  step={1}
                  min={0}
                  max={100}
                />
              </td>
              <td className="text-center pr-0 pl-0">
                <span
                  className="oi oi-x"
                  data-toggle="modal"
                  data-target={`#modalDeletarServico${data.id}`}
                ></span>
              </td>
              {/* modal para deletar serviço */}
              <div
                className="modal"
                id={`modalDeletarServico${data.id}`}
                tabindex="-1"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        Deletar serviço: NomeServico
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
                      <p>Você deseja deletar o serviço?</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger shadow"
                        data-dismiss="modal"
                        onClick={() => {
                          var servicoId = data.id;
                          delServico(servicoId);
                        }}
                      >
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
            </tr>
          ))}
          <tr className="bg-light">
            <td
              className="addServico"
              data-toggle="modal"
              data-target={`#modalAdicionarServico${idEtapa}`}
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
          data-target={`#modalEditarEtapa${idEtapa}`}
        >
          Editar Etapa
        </button>
        {/* <button
          type="button"
          className="btn btn-danger shadow ml-1"
          style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
          data-toggle="modal"
          data-target={`#modalExcluirEtapa${1}`}
        >
          Excluir Etapa
        </button> */}
      </div>

      {/* modal para editar etapa */}
      <div
        className="modal"
        id={`modalEditarEtapa${idEtapa}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Etapa: {nomeEtapa}</h5>
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
              <p>Têm certeza que deseja editar a Etapa: nomeEtapa?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark shadow"
                data-dismiss="modal"
                onClick={putServicos}
              >
                Confirmar
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

      {/* modal para adicionar serviço */}
      <div
        className="modal"
        id={`modalAdicionarServico${idEtapa}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Adicionar Serviço:</h5>
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
              <p>Foi adicionado um serviço na etapa {nomeEtapa}.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark shadow"
                data-dismiss="modal"
                onClick={addServico}
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
};

export default Servico;
