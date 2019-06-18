require('dotenv').config();

const express = require('express');
const orders = require('./order/index');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const { getCounts } = require('./getCounts');
const adminHandler = require('./accountsMangment/admin');
const captainHandler = require('./accountsMangment/captains');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const { getImage } = require('./getImage');
const { getStores } = require('./stores/index');

const router = express.Router();
// router.use(check);
// router.use(checkAuth);
// the all routes start from here
router.use(customerHandler);

router.use(captainHandler);


<<<<<<< HEAD
// router.use(adminHandler);
=======
router.use(adminHandler);
router.use(orderHandler);

>>>>>>> 0781a5928a844b7e10d2cf892237a318ebd64ed1

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
