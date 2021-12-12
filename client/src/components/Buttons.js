import React from "react";
import { Link } from "react-router-dom";
import "../sass/Buttons.scss";

export default function Buttons() {
  return (
    <div className="butonsDiv">
      <Link to="/students">
        <button name="estudiantes" className="buttonFilter">
          ESTUDIANTES
        </button>
      </Link>
      <Link to="/staff">
        <button name="staff" className="buttonFilter">
          STAFF
        </button>
      </Link>
    </div>
  );
}
