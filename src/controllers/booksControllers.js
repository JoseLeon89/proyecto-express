const booksControllers = {
    lista: (req, res) => {
        res.json([
            {
        id:1,
        nombre: 'Producto1'},
        {
            id:2,
            nombre: 'Producto2'}
        ])
    },
    detalle: (req, res) => {
        const id= req.params.id
        const nombre = req.params.name || 'El sin nombre'
        res.send(`La persona de con el id ${id} es ${nombre}`)
    }
}

module.exports = booksControllers