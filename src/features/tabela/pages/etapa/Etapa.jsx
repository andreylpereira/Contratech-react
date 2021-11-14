import React, {useState, useEffect} from "react";
import services from "../../../../services/services";

const Etapa = (props) => {
    const etapaId = props.idEtapa;
    const nomeEtapa = props.nomeEtapa;
    
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


  return (
    <>
      {" "}
      <div
        className="accordion container-fluid w-75 p-0 pb-5"
        id="accordionExample"
      >
        <div className="card card-border shadow">
          <div className="card-header p-4" id={`heading${etapaId}`}>
            <h4 className="row m-0">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <div
                  className="arrow oi oi-caret-right p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${etapaId}`}
                  aria-expanded="true"
                  aria-controls={`collapse${etapaId}`}
                ></div>
              </div>
              <div
                className="title col-10 text-dark font-weight-bold h3 p-0 mb-0 d-flex align-items-center"
                data-toggle="modal"
                data-target={`#modalRenomearEtapa${etapaId}`}
              >
                {props.nomeEtapa}
              </div>
              <div
                className="col-1 oi oi-pencil p-0 pt-1 d-flex justify-content-end edit"
                data-toggle="modal"
                data-target={`#modalRenomearEtapa${etapaId}`}
              ></div>
            </h4>
          </div>

          <div
            id={`collapse${etapaId}`}
            className="panel-collapse collapse in"
            role="tabpanel"
            aria-labelledby={`heading${etapaId}`}
          >
            <div className="panel-body">{props.children}</div>
          </div>
        </div>
      </div>
      {/* modal para alterar nome etapa */}
      <div
        className="modal"
        id={`modalRenomearEtapa${etapaId}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Renomear Etapa: {props.nomeEtapa}</h5>
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
      
    </>
  );
};

export default Etapa;
