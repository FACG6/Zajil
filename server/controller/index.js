require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');

const router = express.Router();
<<<<<<< HEAD
=======

>>>>>>> 530de03af1830575aab78839bd7bdea5c8cd9877
router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here
router.route('/counts')
  .get(getCounts);

router.use(customerHandler);
router.use(orderHandler);

module.exports = router;
