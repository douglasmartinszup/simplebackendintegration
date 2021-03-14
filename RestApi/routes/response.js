const express = require('express');
const router = express.Router();

//Método GET na rota /response de todos os chamados (visualizar lista existente)

router.get('/', (req, res, next) => {
    res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
        mensagem: 'Lista de Responses exibidas '
    });
});

//Método POST na rota /response de um chamado (inclusão de um novo)
router.post('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Response criada com sucesso'
    });
});

//Método DELETE na rota /response de um chamado (deleção)
router.delete('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Response deletada'
    });
});

//Método PATH na rota /response de um chamado (modificação)
router.patch('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Response alterada'
    });
});

//Método GET id específico na rota /response de um chamado

router.get('/:id_response', (req, res, next) => {
    const id = req.params.id_response

    if ( id === 'especial'){
        res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
            mensagem: 'Response especial exibida',
            id: id,
            congratulations: 'Parabéns , você é fera'
        });

    } else {
        res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
            mensagem: 'Response simples exibida',
            id: id
        });

    }



    
});


module.exports = router; //Para exportar as routers criadas


