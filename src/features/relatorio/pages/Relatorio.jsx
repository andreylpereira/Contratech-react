/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useParams } from "react-router-dom";
import "./Relatorio.css";
export default () => {
  let params = useParams();
console.log(params);
  let mocks = [
    {
      id: 1,
      nomeObra: "Residencial Itambé",
      percentualMedioFinal: 55,
      valorTotalFinal: 120.71,
      etapas: [
        {
          id: 1,
          nomeEtapa: "Etapa 1 da Obra 1",
          percentualMedio: 55,
          valorTotal: 60.71,
          servicos: [
            {
              id: 1,
              nomeServico: "Serviço",
              preco: 4.0,
              quantidade: 2,
              porcentagem: 55,
            },
            {
              id: 2,
              nomeServico: "Serviço",
              preco: 12.1,
              quantidade: 1,
              porcentagem: 5,
            },
            {
              id: 3,
              nomeServico: "Serviço",
              preco: 10.35,
              quantidade: 2,
              porcentagem: 55,
            },
            {
              id: 7,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 8,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 9,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
          ],
        },
        {
          id: 2,
          nomeEtapa: "Etapa 2 da Obra 1",
          percentualMedio: 55,
          valorTotal: 60.0,
          servicos: [
            {
              id: 4,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 5,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 6,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 10,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 11,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
            {
              id: 12,
              nomeServico: "Serviço",
              preco: 10.0,
              quantidade: 1,
              porcentagem: 55,
            },
          ],
        },
      ],
    },
  ];

  /* <tr className="bg-white">
<th scope="row">{f}</th>
<td className="text-center">R$: 3550,00</td>
<td className="text-center">100%</td>
</tr> */

  const lista = mocks.map((o, index) => {
    const etapas = o.etapas.map((e) => {
      return (
        <tr className="bg-white">
          <th scope="row">{e.nomeEtapa}</th>
          <td className="text-center">R$: {e.valorTotal}</td>
          <td className="text-center">{e.percentualMedio}%</td>
        </tr>
      );
    });
    return (
      <div className="body" key={index}>
        <p className="container-fluid w-75 mb-0 mt-5 font-weight-bold">
          Contrato nº: 00000{o.id}
        </p>
        <p className="container-fluid w-75 mb-5 font-weight-bold">
          Obra: {o.nomeObra}
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
            {etapas}
            <tr className="bg-white">
              <td className="p-0"></td>
              <td className="p-0"></td>
              <td className="p-0"></td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="panel-group p-0 container-fluid bg-light w-75">
          <div className="container" style={{ marginBottom: 75 }}>
            <p className="m-1 font-weight-bold">
              Valor total:{" "}
              <b className="text-danger">  R$: {o.valorTotalFinal}</b>
            </p>
            <b className="m-1 font-weight-bold">
              Concluído:{" "}
              <b className="text-danger">{o.percentualMedioFinal}%</b>
            </b>
          </div>
        </div>
        <hr style={{ width: 250 }} />
        <p className="text-center font-weight-bold">Assinatura</p>
        <h5>id: {params.obraId}</h5>
      </div>
    );
  });
  return <>{lista}</>;
};
