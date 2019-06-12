const express = require('express');
const { getOrdersDetails } = require('./getCaptainOrders');
const { getDetails } = require('./getCaptainDetails');

const router = express.Router();

router.route('/getCaptainOrders/:id')
  .get(getOrdersDetails);

router.route('/getCaptainDetails/:id')
  .get(getDetails);


module.exports = router;
