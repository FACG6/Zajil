const express = require('express');

const { getDetails } = require('./getCustomerDetails');
const { getCustomer } = require('./getCustomers');

const router = express.Router();

router.route('/getCustomerDetails/:id')
  .get(getDetails);
router.route('/customers').get(getCustomer);
module.exports = router;
