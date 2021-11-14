import React from "react";

const Etapa = (props) => {
    
  return (
    <>
      {" "}
      <div
        className="accordion container-fluid w-75 p-0 pb-5"
        id="accordionExample"
      >
        <div className="card card-border shadow">
          <div className="card-header p-4" id={`heading${1}`}>
            <h4 className="row m-0">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <div
                  className="arrow oi oi-caret-right p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${1}`}
                  aria-expanded="true"
                  aria-controls={`collapse${1}`}
                ></div>
              </div>
              <div
                className="title col-10 text-dark font-weight-bold h3 p-0 mb-0 d-flex align-items-center"
                data-toggle="modal"
                data-target={`#modalRenomearEtapa${1}`}
              >
                {props.id}
              </div>
              <div
                className="col-1 oi oi-pencil p-0 pt-1 d-flex justify-content-end edit"
                data-toggle="modal"
                data-target={`#modalRenomearEtapa${1}`}
              ></div>
            </h4>
          </div>

          <div
            id={`collapse${1}`}
            className="panel-collapse collapse in"
            role="tabpanel"
            aria-labelledby={`heading${1}`}
          >
            <div className="panel-body">{props.children}</div>
          </div>
        </div>
      </div>
      {/* modal para alterar nome etapa */}
      <div
        className="modal"
        id={`modalRenomearEtapa${1}`}
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Renomear Etapa: NomeEtapa</h5>
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
