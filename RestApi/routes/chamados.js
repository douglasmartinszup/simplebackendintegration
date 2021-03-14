const express = require('express');
const router = express.Router();

//Método GET na rota /chamados de todos os chamados (visualizar lista existente)

router.get('/', (req, res, next) => {
    res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
        mensagem: 'Lista de chamados exibida'
    });
});

//Método POST na rota /chamados de um chamado (inclusão de um novo, criar um novo chamado)
router.post('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Chamado criado'
    });
});

//Método DELETE na rota /chamados de um chamado (deleção de um chamado)
router.delete('/', (req, res, next) => {
    res.status(201).send({ //Status 201 sendo que foi feito o post corretamente 
        mensagem: 'Chamado deletado'
    });
});

//Método GET id específico na rota /chamados de um chamado específico

router.get('/:id_chamados', (req, res, next) => {
    const id = req.params.id_chamados
    if ( id === 'especial'){
        res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
            mensagem: 'Chamado específico',
            id: id,
            congratulations: 'Parabéns , você está ficando bom nisso'
        });

    } else {
        res.status(200).send({ //Status 200 sendo que foi feito o get corretamente 
            mensagem: 'Chamado simples',
            id: id
        });

    }



    
});


module.exports = router; //Para exportar as routers criadas


