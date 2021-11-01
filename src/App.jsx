/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import Header from "./components/header/Header";
import Cadastro from "./features/cadastro/pages/Cadastro";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Login from "./features/login/pages/Login";
import Relatorio from "./features/relatorio/pages/Relatorio";

export default () => {
  return (
    <div>
      <Header active="true"/>
      <br />
      {/* <Breadcrumb unique="teste" item="Teste1" active="item 2" router="#" /> */}
      {/* <Cadastro></Cadastro> */}
      {/* <Login></Login> */}
      <Relatorio></Relatorio>
    </div>
  );
};
