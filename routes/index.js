const express = require('express');
const router = express.Router();

const EmpresaRoutes = require('./EmpresaRoutes');
const PersonaRoutes = require('./PersonaRoutes');
const HabilidadesRoutes = require('./HabilidadesRoutes');
const ServiciosRoutes = require('./ServiciosRoutes');

router.use('/Empresas', EmpresaRoutes);
router.use('/Personas', PersonaRoutes);
router.use('/Habilidades',HabilidadesRoutes);
router.use('/Servicios', ServiciosRoutes);

module.exports = router;