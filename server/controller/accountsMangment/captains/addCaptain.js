const { insertCaptain } = require('../../../database/queries/captain/addCaptain');

const addCaptain = (req, res) => {
  // console.log(8888, req.body, 88888888);
  const {
    name,
    email,
    phone,
    address,
    IDNumber,
    licenceNumber,
    status,
    avatar,
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
    type: 2,
  };

  insertCaptain(captainInfo)
    .then(({ captain }) => {
      // console.log(5555, captain);
      const data = {
        name: captain[0].s_name,
        email: captain[0].s_email,
        phone: captain[0].s_mobile_number,
        address: captain[0].s_address,
        IDNumber: captain[0].s_id_number,
        licenceNumber: captain[0].s_driver_licence_number,
        status: captain[0].b_status,
        avatar: captain[0].s_image,

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
      // console.log(66666);
      res.status(500).send({
        error: 'Sorry we have some issues',
      });
    });
};

module.exports = { addCaptain };
