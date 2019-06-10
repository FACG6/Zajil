const { insertCaptain } = require('../../../database/queries/captain/addCaptain');

const addCaptain = (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    IDNumber,
    licenceNumber,
    status,
    avatar,
    password,
  } = req.body;

  const captainInfo = {
    name,
    email,
    phone,
    address,
    IDNumber,
    licenceNumber,
    status,
    avatar,
    type: 1,
    password,
  };
  insertCaptain(captainInfo)
    .then(({ rows: captain }) => {
      const data = {
        name: captain[0].s_name,
        email: captain[0].s_email,
        phone: captain[0].s_mobile_number,
        address: captain[0].s_address,
        IDNumber: captain[0].s_id_number,
        licenceNumber: captain[0].s_driver_licence_number,
        status: captain[0].b_status,
        avatar: captain[0].s_image,
        password: captain[0].s_password,
      };
      if (!captain[0]) {
        res.status(400).send({
          error: 'captain dose not added',
        });
      } else {
        res.status(201).send({
          result: { id: captain[0].pk_i_id, data },
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        error: 'Sorry we have some issues',
      });
    });
};

module.exports = { addCaptain };
