const express = require("express");
const restapi = require('./restapi');
const path = require("path");
const router = express.Router();

//Definindo rotas na aplicação

//Rota para página principal, uma função para o que ela vai devolver nesta rota
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/restapi.js"));
});

/*Outra rota
router.get("/sobre", function (req, res) {
  res.sendFile(path.join(__dirname + "/sobre.html"));
});*/

//Para que o app use a rota principal
restapi.use("/", router);

//Para que os servidor seja "ouvido" na localhost definida em port OU localhost:3000
restapi.listen(process.env.port || 3004);

//Mensagem para saber que deu tudo certo
console.log("Servidor rodando!");