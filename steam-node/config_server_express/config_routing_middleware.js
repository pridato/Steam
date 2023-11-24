const routingCliente = require('./routingCliente');

module.exports = function (servExpress) {
  servExpress.use('/api/Cliente', routingCliente);

}      