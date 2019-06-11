require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const addOrders = require('./order/addOrder');

const router = express.Router();

router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here
router.route('/counts')
  .get(getCounts);

router.route('/addOrders')
  .post(addOrders);

router.use(customerHandler);
router.use(orderHandler);

module.exports = router;
