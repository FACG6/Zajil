const connection = require('../../config/dbConnection');

const insertItemQuery = (items, orderId) => {
  let sql = 'INSERT INTO items (fk_i_order_id, s_name, f_price) VALUES ';
  let v = 2;
  for (let i = 1; i < items.length; i++) {
    sql += `($1, $${v}, $${v + 1}),`;
    v += 2;
  }
  sql += `($1, $${v}, $${v + 1})`;
  return connection.query(sql, [orderId, ...Object.values(items[0])]);
};
module.exports = insertItemQuery;
