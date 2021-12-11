import React from "react";
import "../sass/Nav.scss";
import add from "../img/User_fill_add.png";
import fav from "../img/Rectangle 1.png";

export default function Nav() {
  return (
    <div>
      <button className="bFavorito">
        favoritos <img alt="fav" className="rectangle" src={fav}></img>
      </button>
      <button className="bAgregar">
        agregar
        <img alt="add" src={add}></img>
      </button>
    </div>
  );
}
