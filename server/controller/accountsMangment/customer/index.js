const express = require('express');

const { getDetails } = require('./getCustomerDetails');
const { getCustomer } = require('./getCustomers');
const { addNewCustomer } = require('./addCustomer');

const router = express.Router();

router.route('/getCustomerDetails/:id')
  .get(getDetails);
router.route('/customers').get(getCustomer);
router.route('/addcustomer').post(addNewCustomer);
module.exports = router;
