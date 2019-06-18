const bcrypt = require('bcryptjs');
const {
  checkCustomers,
} = require('../../../database/queries/customer/checkCustomer');
const {
  checkCustomerId,
} = require('../../../database/queries/customer/checkCustomerId');
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
    oldpassword,
  } = req.body;
  checkCustomerId(id)
    .then((checkResult) => {
      const userpassword = checkResult.rows[0].s_password;
      bcrypt
        .compare(oldpassword, checkResult.rows[0].s_password)
        .then((resultcheckHash) => {
          if (resultcheckHash) {
            checkCustomers(email)
              .then(({ rows }) => {
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
                    ).then(resultEdit => res.status(200).send({ result: resultEdit.rows }));
                  } else {
                    editcustomer(
                      id,
                      name,
                      email,
                      phone,
                      status,
                      address,
                      userpassword,
                    )
                      .then((resultEdit) => {
                        res.status(200).send({ result: resultEdit.rows });
                      })
                      .catch(() => res.status(500).send({ error: 'internal server error' }));
                  }
                } else {
                  res.status(400).send({ error: 'هذا الايميل مستخدم مسبقا' });
                }
              })
              .catch(() => res.status(500).send({ error: 'internal server error' }));
          } else res.status(400).send({ error: 'كلمة المرور الحالية خاطئة' });
        })
        .catch(() => res.status(500).send({ error: 'internal server error' }));
    })
    .catch(() => res.status(500).send({ error: 'لا يمكن اتمام هذه العملية' }));
};

module.exports = { editCustomer };
