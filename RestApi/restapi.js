const express = require("express");
const restapi = express();

const rotaResponse = require("./routes/response");

restapi.use('/response',rotaResponse );
   

restapi.use('/teste',(req, res, next)=>{
    res.status(200).send({
        mensagem: "Ok Sua API está online "
    })
    
});

module.exports = restapi;
