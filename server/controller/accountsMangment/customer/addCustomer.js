const { hash } = require('bcryptjs');
const { addcustomer } = require('../../../database/queries/customer/addCustomer');

const addNewCustomer = (req, res) => {
  const {
    name, email, phone, status, address, password,
  } = req.body;
  if (password) {
    hash(password, 5, (error, pass) => {
      if (error)res.status(400).send({ error: 'الرجاء ارسال البيانات مرة اخرى' });
      else {
        addcustomer(name, email, phone, status, address, pass)
          .then((result) => {
            if (result.rows) res.status(200).send({ result: result.rows });
          })
          .catch(() => res.status(500).send({ error: 'internal server error' }));
      }
    });
  }
};
module.exports = { addNewCustomer };
