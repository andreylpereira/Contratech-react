/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Home.css";
import Tabela from "../../../assets/img/home/tabelaObra.jpg";
import Cadastrar from "../../../assets/img/home/cadastro.jpg";
import Cadastro from "../../../assets/img/home/cadastrar.jpg";
import CadastrarObra from "../../../assets/img/home/cadastroObra.jpg";
import Relatorio from "../../../assets/img/home/relatorio.jpg";

export default () => {
  return (
    <div>
      {/* carousel */}
      <div
        className="bg-secondary container-fluid mt-5 mb-5 sombra w-75"
        style={{ borderRadius: 5 }}
      >
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleFade"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleFade" data-slide-to="1"></li>
            <li data-target="#carouselExampleFade" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <img
                  id="img-carousel"
                  src={Cadastro}
                  alt="First slide"
                  className="d-flex mx-auto cover"
                />
              </div>
              {/* <!-- width: 375px e height="264px--> */}
              <div className="carousel-caption d-none d-md-block d-xl-block d-lg-block d">
                <h5 className="text-dark font-weight-bold">Cadastre-se !</h5>
                <p className="subtitle p-1">
                  Cadastre-se agora mesmo para criar e gerir suas obras.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
              id="img-carousel"
                src={CadastrarObra}
                alt="Second slide"
                className="d-block mx-auto cover"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark font-weight-bold">
                  Crie Etapas de suas obras !
                </h5>
                <p className="subtitle p-1">
                  Criando etapas você poderá partir sua obra em fases afim de
                  gerar relatório com detalhes.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
              id="img-carousel"
                src={Relatorio}
                alt="Third slide"
                className="d-block mx-auto cover"
              />
              {/* <!-- className="d-block mx-auto" --> */}
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark font-weight-bold">
                  Imprima o relatório de sua obra !
                </h5>
                <p className="subtitle p-1">
                  Você poderá gerar e imprimir o relatório de suas obras.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div
        className="row container-fluid justify-content-lg-center justify-content-md-center
    justify-content-xl-center
    justify-content-sm-center
    p-0 m-0 mb-5"
      >
        <div className="card m-5 sombra card-mobile">
          <img id="img-card"
            className="card-img-top card-mobile-image"
            src={Cadastrar}
            width="300px"
            height="264px"
            alt="Card image cap"
          />

          <div className="card-body">
            <button
              type="button"
              className="btn btn-dark mb-2 shadow-sm"
              style={{ borderColor: "white" }}
            >
              Cadastre-se
            </button>
            <p className="card-text">
              Cadastre-se na plataforma e comece agora mesmo a gerenciar seus
              projetos de construção civil.
            </p>
          </div>
        </div>
        <div className="card m-5 sombra card-mobile">
          <img
            id="img-card"
            className="card-img-top card-mobile-image"
            src={Tabela}
            width="300px"
            height="264px"
            alt="Card image cap"
          />
          <div className="card-body">
            <h3 className="card-title font-weight-bold">Sobre</h3>
            <p className="card-text">
              Está plataforma têm como objetivo auxiliar engenheiros e
              arquitetos na construção civil a gerenciar obras e projetos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
