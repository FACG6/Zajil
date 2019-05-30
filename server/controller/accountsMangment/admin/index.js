const express = require('express');

const { check } = require('./checkLogin');

const router = express.Router();

router.route('/login')
  .post(check);
module.exports = router;
