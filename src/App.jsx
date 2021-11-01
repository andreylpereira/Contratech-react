/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import Header from "./components/header/Header";
import Cadastro from "./features/cadastro/pages/Cadastro";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Login from "./features/login/pages/Login";
import Relatorio from "./features/relatorio/pages/Relatorio";
import Obra from "./features/obra/pages/Obra";
import Home from "./features/home/pages/Home";

export default () => {
  return (
    <div>
      <Header logged="true"/>
      <br />
      {/* <Breadcrumb unique="teste" item="Teste1" active="item 2" router="#" /> */}
      {/* <Cadastro></Cadastro> */}
      {/* <Login></Login> */}
      {/* <Relatorio></Relatorio> */}
        <Obra></Obra>
        {/* <Home></Home> */}
    </div>
  );
};
