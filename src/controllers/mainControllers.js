const mainControllers = {
    home: (req, res) => {
        res.send('Bienvenido a mi página!')
    },
    contacto: (req, res) => {
        res.send('Contactanos!')
    }
}

module.exports = mainControllers