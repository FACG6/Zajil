const { getCustomers } = require('../../../database/queries/customer/getCustomers');

const getCustomer = (request, response) => {
  getCustomers().then((res) => {
    if (res.rows) { response.json(res.rows); }
  });
};
module.exports = { getCustomer };
