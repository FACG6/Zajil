const { hash } = require('bcryptjs');
const { addcustomer } = require('../../../database/queries/customer/addCustomer');
const { checkCustomers } = require('../../../database/queries/customer/checkCustomer');

const addNewCustomer = (req, res) => {
  const {
    name, email, phone, status, address, password,
  } = req.body;
  checkCustomers(email).then((response) => {
    if (response.rows.length > 0) {
      res.status(400).send({ error: 'البريد الالكتروني مستخدم سابقا ' });
    } else if (password) {
      hash(password, 5, (error, pass) => {
        if (error)res.status(400).send({ error: 'الرجاء ارسال البيانات مرة اخرى' });
        else {
          addcustomer(name, email, phone, status, address, pass)
            .then((result) => {
              if (result.rows) res.status(200).send({ result: result.rows });
            })
            .catch(() => {
              res.status(500).send({ error: 'internal server error' });
            });
        }
      });
    }
  }).catch(error => res.status(500).send({ error: 'internal server error' }));
};
module.exports = { addNewCustomer };
