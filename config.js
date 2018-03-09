require('dotenv').config({path:__dirname + '/.env'});

var config = {
  API_KEY: process.env.API_KEY || '',
  API_SECRET: process.env.API_SECRET || '',
  APP_ID: process.env.APP_ID || '',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
  CONVERSATION_ID: process.env.CONVERSATION_ID || '',
  DEBUG: process.env.DEBUG === 'true'
};

module.exports = config;
