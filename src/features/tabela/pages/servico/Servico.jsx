/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";
import services from "../../../../services/services";
import $ from "jquery";
import { mensagemSucesso, mensagemErro } from "../../../../components/toastr/toastr";

const Servico = (props) => {
  const idObra = props.idObra;
  const idEtapa = props.idEtapa;
  const nomeEtapa = props.nomeEtapa;
  const token = localStorage.getItem("token").replace(/['"]+/g, "");
  const id = JSON.parse(localStorage.getItem("id"));
  const [servicos, setServicos] = useState([]);
  //validações
  const [validError, setValidError] = useState("");
  const [validNome, setValidNome] = useState("");
  const [validPreco, setValidPreco] = useState("");
  const [validPorcentagem, setValidPorcentagem] = useState("");
  const [validQuantidade, setValidQuantidade] = useState("");

  useEffect(() => {
    getServicos();
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
        listaServicos//.sort((a, b) => (a.nomeServico > b.nomeServico && 1) || -1)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addServico = async () => {
    try {
      await services.adicionarServico(token, id, idObra, idEtapa);
      getServicos();
      mensagemSucesso("Serviço adicionado com sucesso!!!");
    } catch (error) {
      mensagemErro("Não foi possível adicionar um novo serviço!");
      console.log(error);
    }
  };

  const delServico = async (servicoId) => {
    const idServico = servicoId;
    try {
      await services.excluirServico(token, id, idObra, idEtapa, idServico);
      getServicos();
      mensagemSucesso("Serviço excluído com sucesso!!!");
    } catch (error) {
      mensagemErro("Não foi possível deletar o serviço!");
      setServicos([]);
      console.log(error);
    }
  };

  const delServicos = async () => {
    try {
      await services.excluirServicos(token, id, idObra, idEtapa);
      getServicos();
      mensagemSucesso("Serviços excluídos com sucesso!!!");
      setInterval(() => {
        reload();
      }, 3000);
    } catch (error) {
      mensagemErro("Não foi possível excluir todos os serviços!!!");
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
      (x) =>
        x.porcentagem >= 0 && x.porcentagem <= 100 && x.porcentagem % 1 === 0
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
        const url = `#modalEditarEtapa${idEtapa}`;
        mensagemSucesso("Serviços salvos com sucesso!!!");
        $(url).hide().click();
      } else {
        mensagemErro("Não foi possível salvar os Serviços!!!");
        setValidError("ATENÇÃO!!!");
        if (validacaoNome.length !== data.length) {
          setValidNome(
            " * O nome do serviço deve ter entre 5 e 35 caracteres!"
          );
        }

        if (validacaoPreco.length !== data.length) {
          setValidPreco(" * O preço do serviço deve ser maior que ZERO!");
        }

        if (validacaoPorcentagem.length !== data.length) {
          setValidPorcentagem(
            " * A porcentagem deve ser um numero inteiro entre 0 e 100!"
          );
        }

        if (validacaoQuantidade.length !== data.length) {
          setValidQuantidade(" * A quantidade deve ser entre 0 e 99!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reload = () => {
    document.location.reload(true);
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
            {!(servicos.length !== 0) && <td className="p-0"></td>}
            {servicos.length !== 0 && (
              <td
                className="text-center addServico pl-0 pr-0"
                data-toggle="modal"
                data-target={`#modalDeletarServicos${idEtapa}`}
              >
                Excluir Todos
              </td>
            )}
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
          onClick={() => {
            setValidError("");
            setValidNome("");
            setValidPreco("");
            setValidPorcentagem("");
            setValidQuantidade("");
          }}
        >
          Salvar
        </button>
        {/* <button
          type="button"
          className="btn btn-danger shadow ml-1"
          style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
          data-toggle="modal"
          data-target={`#modalDeletarServicos${idEtapa}`}
        >
          Excluir
        </button> */}
      </div>
      {/* modal para deletar serviço */}
      <div
        className="modal"
        id={`modalDeletarServicos${idEtapa}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deletar serviços:</h5>
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
              <p>Você deseja deletar todos os serviços da {nomeEtapa}?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger shadow"
                data-dismiss="modal"
                onClick={() => {
                  const id = idEtapa;
                  delServicos(id);
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

      {/* modal para salvar serviços */}
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
              <p>
                Têm certeza que deseja salvar os serviços da Etapa: {nomeEtapa}?
              </p>
              <p
                style={{ height: "10px" }}
                className="error-msg font-italic font-bold mb-0 text-danger h mb-2"
              >
                {validError}
              </p>
              {validNome !== "" && (
                <p
                  style={{ height: "8px" }}
                  className="error-msg font-italic mb-0 text-danger h mb-1"
                >
                  {validNome}
                </p>
              )}
              {validPreco !== "" && (
                <p
                  style={{ height: "8px" }}
                  className="error-msg font-italic mb-0 text-danger h mb-1"
                >
                  {validPreco}
                </p>
              )}
              {validPorcentagem !== "" && (
                <p
                  style={{ height: "8px" }}
                  className="error-msg font-italic mb-0 text-danger h mb-1"
                >
                  {validPorcentagem}
                </p>
              )}
              {validQuantidade !== "" && (
                <p
                  style={{ height: "8px" }}
                  className="error-msg font-italic mb-0 text-danger h mb-1"
                >
                  {validQuantidade}
                </p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark shadow"
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
