const crypto = require('crypto');

const createApiKey = () => {
  const length = 5; // Adjust the length as needed
  const charset = 'abcdefghijklmnopqrstuvwxyz';
  let apiKey = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    apiKey += charset.charAt(randomIndex);
  }

  return apiKey;
};

module.exports = { createApiKey };
