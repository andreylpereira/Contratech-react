/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Relatorio.css";

export default () => {
  return (
    <>
    <div className="body">
      
    <p className="container-fluid w-75 mb-0 mt-5 font-weight-bold">
        Contrato nº: 0000001
      </p>
      <p className="container-fluid w-75 mb-5 font-weight-bold">
        Obra: Edifício Primavera
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
            <th scope="row">Etapa 1</th>
            <td className="text-center">R$: 3550,00</td>
            <td className="text-center">100%</td>
          </tr>
          <tr className="bg-white">
            <th scope="row">Etapa 2</th>
            <td className="text-center">R$: 3050,00</td>
            <td className="text-center">100%</td>
          </tr>
          <tr className="bg-white">
            <th scope="row">Etapa 3</th>
            <td className="text-center">R$: 2050,00</td>
            <td className="text-center">100%</td>
          </tr>
          <tr className="bg-white">
            <th scope="row">Etapa 4</th>
            <td className="text-center">R$: 50,00</td>
            <td className="text-center">100%</td>
          </tr>
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
            Valor total (R$): <b className="text-danger">8.700,00</b>
          </p>
          <b className="m-1 font-weight-bold">
            Concluído (%): <b className="text-danger">100%</b>
          </b>
        </div>
      </div>
      <hr style={{ width: 250 }} />
      <p className="text-center font-weight-bold">Assinatura</p>
    </div>
    </>
  );
};
