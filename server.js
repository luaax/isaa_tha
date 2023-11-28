// importar os pacotes
const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

let staticPath = path.join(__dirname, "public");

//inicializar o express
const app = express();

app.use(express.static(staticPath));

//rota
app.get("/", (req, res) => {
res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(3000, () => {
console.log("parta 3000.....");
});