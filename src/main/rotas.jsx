import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header/Header";
import Cadastro from "../features/cadastro/pages/Cadastro";
import Login from "../features/login/pages/Login";
import Relatorio from "../features/relatorio/pages/Relatorio";
import Obra from "../features/obra/pages/Obra";
import Home from "../features/home/pages/Home";
import Tabela from "../features/tabela/pages/Tabela";
import { AuthProvider, Context } from "../context/AuthContext";

function RequireAuth({ children , redirectTo}) {
  const { authenticated } = useContext(Context);
  if (authenticated) {
    return children;
  } else {
    <Navigate to={redirectTo} />;
  }
}

function Rotas() {

  return (
    <>
      <AuthProvider>
      { <Header />}

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/obras"
            element={
              <RequireAuth redirectTo={"/login"}>
                <Obra />
              </RequireAuth>
            }
          />
          <Route
            path="/obras/:obraId/etapas"
            element={
              <RequireAuth redirectTo={"/login"}>
                <Tabela />
              </RequireAuth>
            }
          />
          <Route
            path="/obras/:obraId/relatorio"
            element={
              <RequireAuth redirectTo={"/login"}>
                <Relatorio />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default Rotas;
