const express = require('express');

const { checkAdmin } = require('./checkLogin');

const router = express.Router();

router.route('/login')
  .post(checkAdmin);
module.exports = router;
