/* eslint-disable no-mixed-operators */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../../../services/services";
import "./Relatorio.css";

const Relatorio = () => {
  const [relatorioObra, setRelatorioObra] = useState({});
  let params = useParams();
  const idObra = params.obraId;
  const token = localStorage.getItem("token").replace(/['"]+/g, "");
  const id = JSON.parse(localStorage.getItem("id"));
  console.log(params);

  useEffect(() => {
   document.getElementById('nav-bar').style.display = "none";
    carregarRelatorio();
    return () => console.log("Fim");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carregarRelatorio = async () => {
    try {
      const relatorio = await services.relatorioObra(token, id, idObra);
      setRelatorioObra(relatorio);
    } catch (error) {
      console.log(error);
    }
  };

  const etapas = relatorioObra['etapas']
  const lista = etapas && etapas.sort((a,b) => a.nomeEtapa > b.nomeEtapa && 1 || -1).map((a) => {
    return (
      <tr className="bg-white">
        <th scope="row">{a.nomeEtapa}</th>
        <td className="text-center">R$: {parseFloat(a.valorTotal).toLocaleString('pt-BR')}</td>
        <td className="text-center">{a.percentualMedio}%</td>
      </tr>
    );
  })

  return (
    <div className="body pt-1 pb-5">
      <p className="container-fluid w-75 mb-0 mt-5 font-weight-bold">
        Contrato nº: 00000{relatorioObra.id}
      </p>
      <p className="container-fluid w-75 mb-5 font-weight-bold">
        Obra: {relatorioObra.nomeObra}
      </p>
      <h3 className="text-center mb-5 font-weight-bold">Relatório</h3>
      <br />
      <table className="table container-fluid w-75">
        <thead className="table-light">
          <tr className="bg-white">
            <th scope="col">Etapa</th>
            <th className="text-center" scope="col">
              Valor Total
            </th>
            <th scope="col" className="text-center">
              Concluído
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-0"></td>
            <td className="p-0"></td>
            <td className="p-0"></td>
          </tr>
          {!lista && <p className="font-italic font-weight-light text-muted">Não há nenhuma etapa ainda nesta obra.</p>}
          {lista}
        </tbody>
      </table>
      <br />
      <div className="panel-group p-0 container-fluid bg-light w-75">
        <div className="container" style={{ marginBottom: 75 }}>
          <p className="m-1 font-weight-bold">
            Valor total:{" "}
            <b className="text-danger"> R$: {parseFloat(relatorioObra.valorTotalFinal).toLocaleString('pt-BR')}</b>
          </p>
          <b className="m-1 font-weight-bold">
            Concluído:{" "}
            <b className="text-danger">{relatorioObra.percentualMedioFinal}%</b>
          </b>
        </div>
      </div>
      <hr style={{ width: 250 }} />
      <p className="text-center font-weight-bold mb-5 pb-4">Assinatura</p>
      <p className="pb-3"></p>
    </div>
  );
};

export default Relatorio;