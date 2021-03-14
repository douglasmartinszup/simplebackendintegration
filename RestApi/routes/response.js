const express = require('express');
const router = express.Router();

//Método GET na rota /response

router.get('/', (req, res, next) => {
    res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
        mensagem: 'Usando o GET dentro da rota de response'
    });
});

//Método POST na rota /response
router.post('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Usando o POST dentro da rota de response'
    });
});

//Método DELETE na rota /response
router.delete('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Usando o DELETE dentro da rota de response'
    });
});

//Método GET id específico na rota response

router.get('/:id_response', (req, res, next) => {
    const id = req.params.id_response

    if ( id === 'especial'){
        res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
            mensagem: 'Você encontrou um Id especial',
            id: id
        });

    } else {
        res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
            mensagem: 'Você passou um simples Id',
            id: id
        });

    }



    
});


module.exports = router; //Para exportar as routers criadas


