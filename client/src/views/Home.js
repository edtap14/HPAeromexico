import React from "react";
import "../sass/Home.scss";
import Nav from "../components/Nav";
import harryImg from "../img/Group 1.png";

export default function Home() {
  return (
    <>
      <div className="principal">
        <Nav />
      </div>
      <div className="divLogo">
        <img className="logoHarry" alt="logoHarry" src={harryImg}></img>
      </div>
      <div className="titlediv">
        <h1 className="title">Selecciona tu filtro</h1>
      </div>
      <div className="footerMovil">
        <Nav />
      </div>
    </>
  );
}
