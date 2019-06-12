const { addcustomer } = require('../../../database/queries/customer/addCustomer');

const addNewCustomer = (req, res) => {
  const customer = req.body;
  addcustomer(customer)
    .then((result) => {
      if (result.rows) res.status(200).send({ result: result.rows });
    })
    .catch(() => res.status(500).send({ error: 'internal server error' }));
};
module.exports = { addNewCustomer };
