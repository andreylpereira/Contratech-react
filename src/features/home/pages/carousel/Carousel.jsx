import Cadastro from "../../../../assets/img/home/cadastro.jpg";
import CadastrarObra from "../../../../assets/img/home/cadastroObra.jpg";
import Relatorio from "../../../../assets/img/home/relatorio.jpg";
import './Carousel.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <div
      className="bg-secondary container-fluid w-75 mb-5 sombra"
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
    );
  };