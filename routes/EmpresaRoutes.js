const express = require('express');

const router = express.Router();//yo le digo a donde va a ir, redireccionar el contenido
const {EmpresaController} = require('../controllers');

//crear
router.post('/',EmpresaController.createEmpresa);
//leer
router.get('/', EmpresaController.getAllEmpresas);
router.get('/:id',EmpresaController.getEmpresa);
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyó"}));
router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));



module.exports = router;
