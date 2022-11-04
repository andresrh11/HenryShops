import React from "react";
import MenuUsuario from "./MenuUsuario";
import styled from "styled-components";
import Imagen from "../../assets/imagenesSlider/luis perfumes.jpg";
import Imagen2 from "../../assets/imagenesSlider/5fa8fb32d99eb.jpeg";
import Imagen3 from "../../assets/imagenesSlider/hamburguesas.jpg";
import { Link } from "react-router-dom";
import { ThemesLanding } from "../../components/ThemesLanding";
import { ThemeProvider } from "styled-components";

const General = () => {
  return (
    <GeneralContainer>
      <ThemeProvider theme={ThemesLanding}>
        <MenuUsuario />
        <GeneralContent>
          <h1 className="general__perfil-title">Tus Compras</h1>
          <div className="compra__card">
            <div className="img__compra__compra-container">
              <img className="img__compra__compra" src={Imagen} alt="" />
            </div>
            <div className="compra__card__info">
              <p className="compra__card__title">Luis Perfumes</p>
              <p className="compra__card__info2">
                13/07/2022 Pago por mercado pago
              </p>
              <p className="compra__card__info3">Perfume Antonio Banderas</p>
              <Link to="/usuario/compras/detalle">
                <button className="compra__card__info4">Ver mas</button>
              </Link>
            </div>
          </div>

          <div className="compra__card">
            <div className="img__compra__compra-container">
              <img className="img__compra__compra" src={Imagen2} alt="" />
            </div>
            <div className="compra__card__info">
              <p className="compra__card__title">Jose Zapateria</p>
              <p className="compra__card__info2">06/11/2022 Pago en efectivo</p>
              <p className="compra__card__info3">
                Zapatillas replicas Nike Jordan
              </p>
              <Link to="/usuario/compras/detalle">
                <button className="compra__card__info4">Ver mas</button>
              </Link>
            </div>
          </div>

          <div className="compra__card">
            <div className="img__compra__compra-container">
              <img className="img__compra__compra" src={Imagen3} alt="" />
            </div>
            <div className="compra__card__info">
              <p className="compra__card__title">Andrés Hamburguesas</p>
              <p className="compra__card__info2">21/05/2022 Pago con tarjeta</p>
              <p className="compra__card__info3">
                Hamburguesa colombiana con extra queso
              </p>
              <Link to="/usuario/compras/detalle">
                <button className="compra__card__info4">Ver mas</button>
              </Link>
            </div>
          </div>
        </GeneralContent>
      </ThemeProvider>
    </GeneralContainer>
  );
};

export default General;

const GeneralContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const GeneralContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  border-left: 1px solid ${({ theme }) => theme.border};

  .general__perfil-title {
    font-size: 20px;
    margin-bottom: 5px;
  }

  .compra__card {
    width: 100%;
    background-color: ${({ theme }) => theme.cream2};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.border};
  }

  .img__compra__compra-container {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    .img__compra__compra {
      width: 100%;
    }
  }

  .compra__card__info {
    margin-left: 10px;
  }

  .compra__card__title {
    color: ${({ theme }) => theme.primary};
  }

  .compra__card__info2 {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .compra__card__info3 {
    font-size: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .compra__card__info4 {
    font-size: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light};
    transition: 0.5s;
    &:hover {
      background-color: ${({ theme }) => theme.light};
      color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }

  @media screen and (max-width: 576px) {
    padding: 5px 5px;

    .general__perfil-title {
      text-align: center;
    }

    .compra__card {
      flex-direction: column;
      text-align: center;
    }

    .img__compra__compra-container {
      width: 100%;
      .img__compra__compra {
        width: 50%;
      }
    }
  }
`;