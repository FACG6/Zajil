require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const { getImage } = require('./getImage');

const router = express.Router();

router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here

router.use(customerHandler);
router.use(orderHandler);
router.route('/image/:name')
  .get(getImage);

module.exports = router;
