require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const adminHandler = require('./accountsMangment/admin');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');
const { addCaptain } = require('./accountsMangment/captains/addCaptain');


const router = express.Router();


router.use(checkAuth);
// the all routes start from here
console.log('nnnnnnn');

router.route('/addCaptain')
  .post(addCaptain);
console.log('bbbbbbbbb');


router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here


router.use(customerHandler);
router.use(orderHandler);


module.exports = router;
