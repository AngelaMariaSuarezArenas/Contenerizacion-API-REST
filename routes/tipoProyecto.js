const { Router } = require('express')
const { createTipoProyecto, getTipoProyectos } =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyectos)

module.exports = router;