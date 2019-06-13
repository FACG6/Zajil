const express = require('express');

const { deleteOrder } = require('./deleteOrder');

const router = express.Router();

router.route('/deleteOrder/:id')
  .delete(deleteOrder);
router.put('/editOrder/:id', updateOrder);
module.exports = router;
