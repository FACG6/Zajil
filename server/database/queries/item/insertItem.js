const connection = require('../../config/dbConnection');

const insertItemQuery = (item, price, orderId) => connection.query(
  'INSERT INTO items (s_name, fk_i_order_id, f_price) VALUES ($1, $2, $3)',
  [item, price, orderId],
);

module.exports = insertItemQuery;
