import React, { useState } from "react";
import { Route } from "react-router-dom";

import Home from "./views/Home";
import Staff from "./views/Staff";
import Estudiantes from "./views/Estudiantes";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/staff" component={Staff} />
      <Route exact path="/students" component={Estudiantes} />
    </div>
  );
}

export default App;
