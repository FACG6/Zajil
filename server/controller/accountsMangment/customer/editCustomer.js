const bcrypt = require('bcryptjs');
const {
  checkCustomers,
} = require('../../../database/queries/customer/checkCustomer');
const {
  editcustomer,
} = require('../../../database/queries/customer/editCustomer');

const editCustomer = (req, res) => {
  const {
    id,
    name,
    email,
    phone,
    status,
    address,
    newpassword,
  } = req.body;
  checkCustomers(email)
    .then(({
      rows,
    }) => {
      if (!rows.length || rows[0].pk_i_id === id) {
        if (newpassword) {
          const hashNewPassword = bcrypt.hashSync(newpassword, 5);
          editcustomer(
            id,
            name,
            email,
            phone,
            status,
            address,
            hashNewPassword,
          ).then(resultEdit => res.status(200).send({
            result: resultEdit.rows,
          }));
        } else {
          editcustomer(
            id,
            name,
            email,
            phone,
            status,
            address,
            newpassword,
          )
            .then((resultEdit) => {
              res.status(200).send({
                result: resultEdit.rows,
              });
            })
            .catch(() => {
              res.status(500).send({
                error: 'internal server error',
              });
            });
        }
      } else {
        res.status(400).send({
          error: 'هذا الايميل مستخدم مسبقا',
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'internal server error',
    }));
};

module.exports = {
  editCustomer,
};
