const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const configrouting = require('./config_routing_middleware');

module.exports = function (servExp) {
  servExp.use(cookieParser());
  servExp.use(bodyParser.json());
  servExp.use(bodyParser.urlencoded({ extended: true }));
  servExp.use(cors());

  configrouting(servExp);
};