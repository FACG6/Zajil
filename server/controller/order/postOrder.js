const { insertOrder } = require('../../database/queries/order/addOrder');
const { insertTuserOrder } = require('../../database/queries/captain/insertTuserOrder');
const { insertItem } = require('../../database/queries/item/insertItem');

exports.postOrder = (req, res) => {
  console.log(req.body);
  const {
    address, items, phone, customerName, placeId, captainId,
  } = req.body;
  let orderId;
  insertOrder(placeId, address, phone, customerName)
    .then(({ rows }) => {
      orderId = rows[0].pk_i_id;
      return insertTuserOrder(captainId, orderId);
    })
    .then(() => insertItem(orderId, items))
    .then(() => {
      res.status(201).send({ result: 'the add order is done' });
    })
    .catch(() => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
};
