const express = require('express');

const router = express.Router();//yo le digo a donde va a ir, redireccionar el contenido
const {PersonaController} = require('../controllers');

//crear
router.post('/', PersonaController.createPersona);
//leer
router.get('/', PersonaController.getAllPersonas);
router.get('/:id',PersonaController.getPersona);
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyo"}));
router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));


module.exports = router;