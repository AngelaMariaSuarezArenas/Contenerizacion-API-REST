const { Router } = require('express')
const {  
    createUniversidad, 
    getUniversidades,
    updateUniversidadByID } =
 require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getUniversidades)


module.exports = router;