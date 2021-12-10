const fs = require("fs");

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/characters", (req, res) => {
  const redCharacters = fs.readFileSync("hp-characters.json");
  const characters = JSON.parse(redCharacters);
  res.status(200).json(characters);
});

app.get("/griffindor", (req, res) => {
  const redGriffindorCharacters = fs.readFileSync("hp-gryffindor.json");
  const griffindorCharacters = JSON.parse(redGriffindorCharacters);
  res.status(200).json(griffindorCharacters);
});

app.get("/staff", (req, res) => {
  const redStaff = fs.readFileSync("hp-staff.json");
  const hpStaff = JSON.parse(redStaff);
  res.status(200).json(hpStaff);
});

app.get("/students", (req, res) => {
  const redSudetsFile = fs.readFileSync("hp-students.json");
  const hpStudents = JSON.parse(redSudetsFile);
  res.status(200).json(hpStudents);
});

app.listen("3001", function () {
  console.log("Servidor web escuchando en el puerto 3000");
});
