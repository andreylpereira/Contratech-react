/* eslint-disable import/no-anonymous-default-export */
import './App.css';
import Header from './components/header/Header'
import Card from './components/card/Card'
import Breadcrumb from './components/breadcrumb/Breadcrumb';

export default () => {
  return (
    <div>
    <Header/>
    <br />
    <Breadcrumb unique="teste" item="Teste1" active="item 2" router="#"/>
    <br />
    <Card title="Teste"/>
    </div>
  );
}