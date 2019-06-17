require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const captainHandler = require('./accountsMangment/captains');
const { getImage } = require('./getImage');
const { getStores } = require('./stores/index');

const router = express.Router();
// router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

// router.use(protectRoutes);
// the protected route start from here
router.route('/counts')
  .get(getCounts);
router.get('/getStores', getStores);
router.use(captainHandler);

router.use(customerHandler);
router.use(orderHandler);
router.route('/image/:name')
  .get(getImage);

module.exports = router;
