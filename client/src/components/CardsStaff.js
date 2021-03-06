import React, { useState } from "react";
import "../sass/Cards.scss";
import databaseStaff from "../json/hp-staff.json";

export default function Cards() {
  return (
    <div className="divPrincipal">
      <div className="wrapper">
        {databaseStaff.map((c) => {
          return (
            <div key={c.name} className="divCards">
              <div className={c.house ? c.house : "noHome"}>
                <img
                  alt="character"
                  className="imgCharacters"
                  src={c.image}
                ></img>
              </div>
              <div className={c.alive ? "divwhite" : "divDeath"}>
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
                  <span>{c.alive ? "VIVO" : "FINADO"} </span>
                  <span>{c.hogwartsStudent ? "/ ESTUDIANTE" : "/ STAFF"}</span>
                  <button
                    className="imgFav"
                    alt="fav"
                    // back={rectangle1}
                  ></button>
                </div>
                <div className="nameCharacter">
                  <span>{c.alive ? c.name : "+ " + c.name}</span>
                </div>
                <div className="dataCharacter">
                  <p className="spantitle">
                    Cumpleaños:
                    <span> {c.dateOfBirth}</span>
                  </p>
                  <p className="spantitle">
                    Género:
                    <span>
                      {" "}
                      {c.gender.charAt(0).toUpperCase() + c.gender.slice(1)}
                    </span>
                  </p>
                  <p className="spantitle">
                    Color de ojos:
                    <span>
                      {" "}
                      {c.eyeColour.charAt(0).toUpperCase() +
                        c.eyeColour.slice(1)}
                    </span>
                  </p>
                  <p className="spantitle">
                    Color de pelo:
                    <span>
                      {" "}
                      {c.hairColour.charAt(0).toUpperCase() +
                        c.hairColour.slice(1)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
