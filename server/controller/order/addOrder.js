const { addOrder } = require("../../database/queries/order/addOrder");

exports.addorder = (req, res) => {
  const { placeId, customerAddress, customerPhone } = req.body;

  addOrder(placeId, customerAddress, customerPhone).then(({ rows: orders }) => {
    const data = {
      placeId: orders[0].fk_i_place_id,
      customerAddress: orders[0].s_customer_address,
      customerPhone: orders[0].s_customer_phone,
    };
    if (!orders[0]) {
      res.status(400).send({
        error: 'order not add',
      });
    } else {
      res.status(201).send({
        result: { id: orders[0].pk_i_id, data }
      });
    }
  });
};
