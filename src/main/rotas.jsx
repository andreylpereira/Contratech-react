import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from '../components/header/Header';
import Cadastro from "../features/cadastro/pages/Cadastro";
import Login from "../features/login/pages/Login";
import Relatorio from "../features/relatorio/pages/Relatorio";
import Obra from "../features/obra/pages/Obra";
import Home from "../features/home/pages/Home";
import Tabela from "../features/tabela/pages/Tabela";

function Rotas() {
  return (
    <>
    <Header logged="true">
    </Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/obras" element={<Obra />} />
        <Route path="/obras/:obraId/etapas" element={<Tabela />} />
        <Route path="/obras/:obraId/relatorio" element={<Relatorio />} />
      </Routes>
      </>
  );
}

export default Rotas;