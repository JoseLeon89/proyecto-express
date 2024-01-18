const express = require ('express')
const router = express.Router()

const mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.home)
router.get('/contacto', mainControllers.contacto)

router.get('/vico', (req, res) => {
    res.send('Bienvenido Vico!')
  })

module.exports = router