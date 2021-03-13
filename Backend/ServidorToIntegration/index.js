const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

//Definindo rotas na aplicação

//Rota para página principal, uma função para o que ela vai devolver nesta rota
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//Outra rota
router.get("/sobre", function (req, res) {
  res.sendFile(path.join(__dirname + "/sobre.html"));
});

//Para que o app use a rota principal
app.use("/", router);

//Para que os servidor seja "ouvido" na localhost definida em port OU localhost:3000
app.listen(process.env.port || 3000);

//Mensagem para saber que deu tudo certo
console.log("Servidor rodando!");
