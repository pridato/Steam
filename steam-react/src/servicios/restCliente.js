var clienteRESTService = {

  RegistroCliente: async function (clienteLogged) {

    console.log('clienteLogged:', clienteLogged)

    try {
      var _petAjax = await fetch('http://localhost:3003/api/Cliente/Registro',
        {
          method: 'POST',
          body: JSON.stringify(clienteLogged),
          headers: { 'Content-Type': 'application/json ' }
        }
      );
      return await _petAjax.json();
    } catch (error) {
      return JSON.parse(error);
    }
  },

  ConfirmarSesionCliente: async function (key) {
      
      console.log('key:', key)
  
      try {
        var _petAjax = await fetch('http://localhost:3003/api/Cliente/ConfirmarSesion',
          {
            method: 'POST',
            body: JSON.stringify(key),
            headers: { 'Content-Type': 'application/json ' }
          }
        );
        return await _petAjax.json();
      } catch (error) {
        return JSON.parse(error);
      }
  }
}

export default clienteRESTService