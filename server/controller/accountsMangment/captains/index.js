const express = require('express');

const { getDetails } = require('./getCaptainDetails');
const { updateCaptain } = require('./editCaptain');

const router = express.Router();

router.route('/getCaptainDetails/:id')
  .get(getDetails);


router.route('/putCaptain/:id')
  .put(updateCaptain);

module.exports = router;
