/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import Carousel from "./features/home/pages/carousel/Carousel";
import CardsHome from "./features/home/pages/cards/CardsHome";
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";

export default () => {
  return (
    <>
      <Routes>
        <Route path="/home"></Route>
      </Routes>
      <Outlet />
    </>
  );
};
