import react from "react";

const Servico = () => {
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
          <tr className="bg-light">
            <th scope="row" className="pr-0">
              <input
                //onChange={(s) => setRelatorioObra(s.target.value)}
                //value={s.nomeServico}
                className="w-auto text-center shadow"
                type="text"
              />
            </th>
            <td className="text-center pr-0 pl-0">
              <input
                //onChange={(s) => setRelatorioObra(s.target.value)}
                //value={s.preco}
                className="w-75px text-center shadow"
                type="number"
                step={0.01}
                min={0}
              />
            </td>
            <td className="text-center pr-0 pl-0">
              <input
                //onChange={(s) => setRelatorioObra(s.target.value)}
                //value={s.quantidade}
                className="w-45px text-center shadow"
                type="number"
                step={1}
                min={0}
              />
            </td>
            <td className="text-center pr-0 pl-0">
              <input
                //onChange={(s) => setRelatorioObra(s.target.value)}
                //value={s.porcentagem}
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
                data-target={`#modalDeletarServico${1}`}
              ></span>
            </td>
          </tr>

          <tr className="bg-light">
            <td
              className="addServico"
              data-toggle="modal"
              data-target={`#modalAdicionarServico${1}`}
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
          data-target={`#modalEditarEtapa${1}`}
        >
          Editar Etapa
        </button>
        <button
          type="button"
          className="btn btn-danger shadow ml-1"
          style={{ borderColor: "rgba(0, 0, 0, 0.200)" }}
          data-toggle="modal"
          data-target={`#modalExcluirEtapa${1}`}
        >
          Excluir Etapa
        </button>
      </div>

      {/* modal para excluir etapa */}
      <div
        className="modal"
        id={`modalExcluirEtapa${1}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Excluir Etapa: nomeEtapa</h5>
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
              <p>Você deseja excluir a Etapa: nomeEtapa</p>
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
        id={`modalEditarEtapa${1}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Etapa: nomeEtapa</h5>
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
        id={`modalAdicionarServico${1}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Adicionar Serviço: AddServico</h5>
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
              <p>Foi adicionado um serviço na etapa nomeEtapa.</p>
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

      {/* modal para alterar nome etapa */}
      <div
        className="modal"
        id={`modalDeletarServico${1}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deletar serviço: NomeServico</h5>
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
              <p>Você deseja deletar o serviço nomeServico ({1})</p>
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
};

export default Servico;
