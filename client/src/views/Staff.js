import React from "react";
import { Link } from "react-router-dom";

import "../sass/Home.scss";
import Nav from "../components/Nav";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import CardsStaff from "../components/CardsStaff";
import CardsStudents from "../components/CardsStudents";
import harryImg from "../img/Group 1.png";

export default function Home() {
  return (
    <>
      <div className="principal">
        <Nav />
      </div>
      <div className="divLogo">
        <Link to="/">
          <img className="logoHarry" alt="logoHarry" src={harryImg}></img>
        </Link>
      </div>
      <div className="titlediv">
        <h1 className="title">Selecciona tu filtro</h1>
      </div>
      <div className="buttonsDiv">
        <Buttons />
      </div>
      <div>
        <CardsStaff />
      </div>
      <div className="footerMovil">
        <Nav />
      </div>
    </>
  );
}
