const express = require('express');
const { addCaptain } = require('./addCaptain');
const { getDetails } = require('./getCaptainDetails');

const router = express.Router();

router.route('/getCaptainDetails/:id')
  .get(getDetails);

router.route('/addCaptain')
  .post(addCaptain);
module.exports = router;
