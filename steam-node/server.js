require('dotenv').config();

const express = require('express');
var serverExpress = express();

const mongoose = require('mongoose');
const configServer = require('./config_server_express/config_pipeline');

serverExpress.listen(3003, () => console.log('...servidor web express escuchando por puerto 3003...'));
configServer(serverExpress);

mongoose.connect(process.env.CONNECTION_MONGODB)
  .then(() => {
    console.log('...conexion al servidor de BD mongo establecido de forma correcta....');
  })
  .catch((err) => {
    console.log('fallo al conectarnos al sevidor de bd de mongo:', err);
  });