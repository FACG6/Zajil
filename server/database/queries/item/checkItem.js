const connection = require('../../config/dbConnection');

const checkIfItemExistQuery = itemName => connection
  .query('SELECT s_name FROM items WHERE items.s_name = $1', [itemName])
  .then(res => res.rows[0]);

module.exports = checkIfItemExistQuery;
