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
  const lista = etapas && etapas.map((a) => {
    return (
      <tr className="bg-white">
        <th scope="row">{a.nomeEtapa}</th>
        <td className="text-center">R$: {a.valorTotal}</td>
        <td className="text-center">{a.percentualMedio}%</td>
      </tr>
    );
  })

  return (
    <div className="body">
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
          {lista}
        </tbody>
      </table>
      <br />
      <div className="panel-group p-0 container-fluid bg-light w-75">
        <div className="container" style={{ marginBottom: 75 }}>
          <p className="m-1 font-weight-bold">
            Valor total:{" "}
            <b className="text-danger"> R$: {relatorioObra.valorTotalFinal}</b>
          </p>
          <b className="m-1 font-weight-bold">
            Concluído:{" "}
            <b className="text-danger">{relatorioObra.percentualMedioFinal}%</b>
          </b>
        </div>
      </div>
      <hr style={{ width: 250 }} />
      <p className="text-center font-weight-bold">Assinatura</p>
      {/* <h5>id: {params.obraId}</h5> */}
    </div>
  );
};

export default Relatorio;