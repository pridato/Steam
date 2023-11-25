const bcrypt = require('bcrypt');

var usuario = require('../modelos/usuario');

module.exports = {
  registro: async (req, res) => {
    try {
      console.log('datos recibidos por el cliente react en componente registro, por ajax...', req.body);
      var usuarioNuevo = new usuario(
        {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          cuenta: {
            login: req.body.nombre,
            email: req.body.email,
            password: req.body.password,
            cuentaActiva: false,
            imagenAvatarBASE64: ''
          }
        }
      ).save()

      console.log('usuario creado en mongoDB...', usuarioNuevo);

      res.status(200)
        .send(
          {
            codigo: 0,
            mensaje: 'datos del cliente insertados ok'
          }
        )

    } catch (error) {
      console.log('error al hacer el insert en coleccion clientes...', error);
      res.status(200).send(
        {
          codigo: 1,
          mensaje: `error a la hora de insertar datos del cliente: ${JSON.stringify(error)}`
        }

      )
    }
  }
}