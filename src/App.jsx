/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import Header from "./components/header/Header";
import Cadastro from "./features/cadastro/pages/Cadastro";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Login from "./features/login/pages/Login";
import Relatorio from "./features/relatorio/pages/Relatorio";
import Obra from "./features/obra/pages/Obra";
import Home from "./features/home/pages/Home";
import Tabela from "./features/tabela/pages/Tabela";

export default () => {
  return (
    <>
      <Header logged="true" />
      {/* <Breadcrumb unique="teste" item="Teste1" active="item 2" router="#" />  */}
         {/* <Cadastro></Cadastro> */}
       {/* <Home></Home> */}
        {/* <Login></Login>   */}

       {/* <Obra></Obra>   */}
       <Tabela></Tabela>   

      {/* <Relatorio></Relatorio>  */}
    </>
  );
};
