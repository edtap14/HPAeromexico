import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/Cards.scss";
import "../sass/CardsCreated.scss";

export default function CardsCreated() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      const personajesNuevos = response.data.map((c) => {
        return (
          <div key={c.id} className="divCards">
            <div className={c.house ? c.house : "noHome"}>
              {/* <img
                  alt="character"
                  className="imgCharacters"
                  src={c.image}
                ></img> */}
            </div>
            <div className="divwhite">
              <div className="divtitleCel">
                <span>{c.name}</span>
              </div>
              <div className="divHeadCel">
                <span>
                  {c.alive ? "VIVO" : "FINADO"}
                  <br></br>
                </span>
                <span>{c.hogwartsStudent ? " ESTUDIANTE" : " STAFF"}</span>
                <button
                  className="imgFavCel"
                  alt="fav"
                  // back={rectangle1}
                ></button>
              </div>
              <div className="divHead">
                <span>{c.alive ? "VIVO" : "VIVO"} </span>
                <span>{c.hogwartsStudent ? "/ ESTUDIANTE" : "/ STAFF"}</span>
                <button
                  className="imgFav"
                  alt="fav"
                  // back={rectangle1}
                ></button>
              </div>
              <div className="nameCharacter">
                <span>{c.alive ? c.name : c.name}</span>
              </div>
              <div className="dataCharacter">
                <p className="spantitle">
                  Cumpleaños:
                  <span> {c.dateOfBirth}</span>
                </p>
                <p className="spantitle">
                  Género:
                  <span> {c.gender}</span>
                </p>
                <p className="spantitle">
                  Color de ojos:
                  <span> {c.eyeColour}</span>
                </p>
                <p className="spantitle">
                  Color de pelo:
                  <span> {c.hairColour}</span>
                </p>
              </div>
            </div>
          </div>
        );
      });
      setData(personajesNuevos);
    });
  }, [data]);

  return (
    <div className="divPrincipal">
      <div className="wrapper">{data}</div>
    </div>
  );
}
