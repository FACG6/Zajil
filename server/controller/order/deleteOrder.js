const { deleteOrder } = require('../../database/queries/order/deleteOrder');

exports.deleteOrder = (req, res) => {
  const { id } = req.params;
  deleteOrder(id)
    .then(() => {
      res.send({ result: 'delete done' });
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
};
