const express = require('express');

const { getDetails } = require('./getCustomerDetails');

const router = express.Router();

router.route('/getCustomerDetails/:id')
  .get(getDetails);

module.exports = router;
