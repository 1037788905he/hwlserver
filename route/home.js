const express = require('express')

const home = express.Router();

home.get('/', (req, res) => {
  res.send('admin/login')
});

module.exports = home