require('dotenv').config({
  path: process.env.NODE_ENV === ".env"
})

const express = require('express')
const cors = require('cors')

class AppController {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    const cors_config = require('./config/cors');
    this.app.use(cors(cors_config));
    this.app.use(express.json())
  }

  routes(){
    this.app.use(require('./routes'));
  }
}

module.exports = new AppController().app;
