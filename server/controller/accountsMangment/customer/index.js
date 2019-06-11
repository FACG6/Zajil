const express = require('express');

const { getDetails } = require('./getCustomerDetails');
const { getOrdersDetails } = require('./getCustomerOrders');

const router = express.Router();

router.route('/getCustomerDetails/:id')
  .get(getDetails);

router.route('/getCustomerOrders/:id')
  .get(getOrdersDetails);

module.exports = router;
