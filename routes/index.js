const express = require('express');
const router = express.Router();

const EmpresaRoutes = require('./EmpresaRoutes');
const PersonaRoutes = require('./PersonaRoutes');
const HabilidadesRoutes = require('./HabilidadesRoutes');

router.use('/Empresas', EmpresaRoutes);
router.use('/Personas', PersonaRoutes);
router.use('/Habilidades',HabilidadesRoutes);
module.exports = router;