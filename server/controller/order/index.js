const express = require('express');

const { deleteOrder } = require('./deleteOrder');
const { updateOrder } = require('./updateOrder');

const router = express.Router();

router.route('/deleteOrder/:id')
  .delete(deleteOrder);
router.put('/editOrder/:id', updateOrder);
module.exports = router;
