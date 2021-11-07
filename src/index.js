import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Header from "./components/header/Header";
import Cadastro from "./features/cadastro/pages/Cadastro";
import Login from "./features/login/pages/Login";
import Relatorio from "./features/relatorio/pages/Relatorio";
import Obra from "./features/obra/pages/Obra";
import Home from "./features/home/pages/Home";
import Tabela from "./features/tabela/pages/Tabela";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header logged="true" />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/obras" element={<Obra />} />
        <Route path="/obras/:obraId/etapas" element={<Tabela />} />
        <Route path="/obras/:obraId/relatorio" element={<Relatorio />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);