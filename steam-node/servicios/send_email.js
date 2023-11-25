const Mailjet = require('node-mailjet');
const bcrypt = require('bcrypt');

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC || 'your-api-key',
  apiSecret: process.env.MJ_APIKEY_PRIVATE || 'your-api-secret'
});

const send_api_key = (email, nombre, api_key) => {
  const request = mailjet.post('send', { version: 'v3.1' })
  .request({
    Messages: [
      {
        From: {
          Email: 'davidarroyo25052004@gmail.com',
          Name: 'Steam'
        },
        To: [
          {
            Email: email,
            Name: nombre
          }
        ],
        Subject: 'Steam API Key',
        TextPart: `Your Steam API Key is: ${api_key}`,
        HTMLPart: `<h3>Your Steam API Key is: ${api_key}</h3>`
      }
    ]
  });
  request
    .then(result => {
      console.log(result.body);
    })
    .catch(err => {
      console.log(err.statusCode);
    });
}

module.exports = { send_api_key }