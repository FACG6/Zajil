const express = require('express');

const { getDetails } = require('./getCustomerDetails');
const { getOrdersDetails } = require('./getCustomerOrders');
const { getCustomer } = require('./getCustomers');
const { addNewCustomer } = require('./addCustomer');

const router = express.Router();

router.route('/getCustomerDetails/:id')
  .get(getDetails);

router.route('/getCustomerOrders/:id')
  .get(getOrdersDetails);
router.route('/addcustomer').post(addNewCustomer);
router.route('/customers').get(getCustomer);
module.exports = router;
