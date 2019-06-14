const connection = require('../../config/dbConnection');

const insertItemQuery = (item, price, orderId) => connection.query(
  'INSERT INTO items (s_name, f_price, fk_i_order_id) VALUES ($1, $2, $3)',
  [item, price, orderId],
);

module.exports = insertItemQuery;
