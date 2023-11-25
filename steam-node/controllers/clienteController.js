const bcrypt = require('bcrypt');
const create_api_key = require('../servicios/create_api_key')
const send_email = require('../servicios/send_email')

var usuario = require('../modelos/usuario');

module.exports = {
  registro: async (req, res) => {
    try {
      const key = create_api_key.createApiKey()

      var usuarioNuevo = new usuario(
        {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          cuenta: {
            login: req.body.nombre,
            email: req.body.email,
            password: req.body.password,
            cuentaActiva: false,
            api_key: key,
            imagenAvatarBASE64: ''
          }
        }
      ).save()

      // mandar email de confirmacion de cuenta
      send_email.send_api_key(req.body.email, req.body.nombre, key)

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
  },
  confirmarSesion: async (req, res) => {
    try {
      console.log('req.body:', req.body)

      const api_key = req.body.pin1 + req.body.pin2 + req.body.pin3 + req.body.pin4 + req.body.pin5

      //crear un usuario para trabajar con mongo a traves del api_key
      // buscar usuario por el api_key

      var Usuario = await usuario.findOne({ 'cuenta.api_key': api_key })

      console.log('usuario encontrado:', Usuario)


      if (Usuario) {
        res.status(200).send(
          {
            codigo: 0,
            mensaje: 'usuario encontrado',
            usuario: usuario
          }
        )
      } else {
        res.status(500).send(
          {
            codigo: 1,
            mensaje: 'usuario no encontrado'
          }
        )
        throw new Error('usuario no encontrado')
      }
    } catch (error) {
      console.log('error al hacer el find en coleccion clientes...', error);
      res.status(200).send(
        {
          codigo: 1,
          mensaje: `error a la hora de buscar datos del cliente: ${JSON.stringify(error)}`
        }

      )
    }
  }
}