import React, { useState } from "react";
import add from "../img/User_fill_add.png";
import fav from "../img/Rectangle 1.png";
import Modal from "../components/Modal";
// import characters from "../db.json";

import "../sass/Nav.scss";
import "../sass/Modal.scss";

export default function Nav() {
  const [active, setActive] = useState(false);

  const [datos, setDatos] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    posicion: ""
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });
    // const data = response.json();
    setDatos({
      name: "",
      dateOfBirth: "",
      eyeColour: "",
      hairColour: "",
      gender: "",
      posicion: ""
    });

    alert("Se ha creado un nuevo personaje");
    // console.log(data);
  };

  const toggle = () => {
    setActive(!active);
  };
  return (
    <div>
      <Modal active={active} toggle={toggle}>
        <div className="headtitleModal">
          <p>Agregar un personaje</p>
          <button className="closeBtn" onClick={toggle}>
            X
          </button>
        </div>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="divName">
            <label className="labelname">NOMBRE</label>
            <input
              className="inputName"
              type="text"
              onChange={handleInputChange}
              name="name"
            ></input>
          </div>
          <div className="divName">
            <label className="labelname">CUMPLEAÑOS</label>
            <input
              className="inputName"
              type="date"
              onChange={handleInputChange}
              name="dateOfBirth"
            ></input>
          </div>
          <div className="divName">
            <label className="labelname">COLOR DE OJOS</label>
            <input
              className="inputName"
              type="text"
              onChange={handleInputChange}
              name="eyeColour"
            ></input>
          </div>
          <div className="divName">
            <label className="labelname">COLOR DE CABELLO</label>
            <input
              className="inputName"
              type="text"
              onChange={handleInputChange}
              name="hairColour"
            ></input>
          </div>
          <div className="labelGen">
            <label className="etiqueta">GÉNERO</label>
          </div>
          <div className="labelGen">
            <label className="etiqueta">POSICIÓN</label>
          </div>
          <div className="divInputRadio">
            <input
              className="inputRadio"
              type="radio"
              onChange={handleInputChange}
              value="female"
              name="gender"
            ></input>
            <label className="inputLabelRadio">Mujer</label>
            <input
              className="inputRadio"
              type="radio"
              onChange={handleInputChange}
              value="male"
              name="gender"
            ></input>
            <label className="inputLabelRadio">Hombre</label>
          </div>
          <div className="divInputRadio">
            <input
              className="inputRadio"
              type="radio"
              onChange={handleInputChange}
              value="hogwartsStudent"
              name="posicion"
            ></input>
            <label className="inputLabelRadio">Estudiante</label>
            <input
              className="inputRadio"
              type="radio"
              onChange={handleInputChange}
              value="hogwartsStaff"
              name="posicion"
            ></input>
            <label className="inputLabelRadio">Staff</label>
          </div>
          <div className="divFile">
            <input type="file"></input>
          </div>
          <div className="divGuardar">
            <button type="submit">GUARDAR</button>
          </div>
        </form>
      </Modal>
      <button className="bFavorito">
        favoritos <img alt="fav" className="rectangle" src={fav}></img>
      </button>
      <button className="bAgregar" onClick={toggle}>
        agregar
        <img alt="add" src={add}></img>
      </button>
    </div>
  );
}
