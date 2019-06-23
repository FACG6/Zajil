const { insertOrder } = require('../../database/queries/order/addOrder');
const { insertTuserOrder } = require('../../database/queries/captain/insertTuserOrder');
const { insertItem } = require('../../database/queries/item/insertItemOrder');

exports.postOrder = (req, res) => {
  const {
    address, items, phone, customerName, placeId, captainId,
  } = req.body;
  let orderId;
  insertOrder(placeId, address, phone, customerName)
    .then(({ rows }) => {
      orderId = rows[0].pk_i_id;
      return insertTuserOrder(captainId, orderId);
    })
    .then(() => insertItem(orderId, items.filter(item => item !== null)))
    .then(() => {
      res.status(201).send({ result: { id: orderId, ...req.body } });
    })
    .catch(() => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
};
