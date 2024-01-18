const express = require ('express')
const router = express.Router()

const booksControllers = require('../controllers/booksControllers')

router.get('/lista', booksControllers.lista)
router.get('/detalle/:id/:name?', booksControllers.detalle)
router.get('/vico', (req, res) => {
    res.send('Bienvenido Vico!')
  })

module.exports = router