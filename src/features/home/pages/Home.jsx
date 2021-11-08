/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Home.css";
import CardsHome from "./cards/CardsHome";
import Carousel from "./carousel/Carousel";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="pageHome">
      <div className="pt-5"></div>
      <Carousel></Carousel>
      <CardsHome></CardsHome>
    </div>
  );
};
