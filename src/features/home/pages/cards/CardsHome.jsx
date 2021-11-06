/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
import Tabela from "../../../../assets/img/home/tabelaObra.jpg";
import Cadastrar from "../../../../assets/img/home/cadastro.jpg";
import './CardsHome.css'

export default () => {
  return (
    <div
      className="bg-light row container-fluid justify-content-lg-center justify-content-md-center
    justify-content-xl-center
    justify-content-sm-center
    p-0 m-0"
    >
      <div className="card m-5 sombra card-mobile">
        <img
          id="img-card"
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
            Está plataforma têm como objetivo auxiliar engenheiros e arquitetos
            na construção civil a gerenciar obras e projetos.
          </p>
        </div>
      </div>
    </div>
  );
};
