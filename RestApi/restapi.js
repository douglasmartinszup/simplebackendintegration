const express = require("express"); //Crio uma const express que faz um require do método express
const restapi = express(); //Crio uma const que vai utilizar esse método que acabeid e criar
const morgan = require("morgan");
const bodyParser = require('body-parser');

const rotaResponse = require("./routes/response");
const rotaChamados = require("./routes/chamados");

restapi.use(morgan("dev")); // O morgan ele te dá logs de chamados feito na sua API, você pode acompanhar no terminal assim que rodar no nmp start
restapi.use(bodyParser.urlencoded({ extended: false })); //Apenas aceitar dados simples
restapi.use(bodyParser.json()) //Aceitar apenas entradas no formato Json


//Resolvendo problemas de CORS
restapi.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Content-Type',
        'Origin, X-Requested-With, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
        req.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

//Chamando rotas
restapi.use("/response", rotaResponse);
restapi.use("/chamados", rotaChamados);


//Quando não encontrar rotas existentes
restapi.use((req, res, next) => {
  const erro = new Error("Esta rota não existe.");
  erro.status = 404;
  next(erro);
});

//Resposta para quando usuário tentar uma rota que não existe
restapi.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})

restapi.use("/teste", (req, res, next) => {
  res.status(200).send({
    mensagem: "Ok Sua API está online ",
  });
});

module.exports = restapi;
