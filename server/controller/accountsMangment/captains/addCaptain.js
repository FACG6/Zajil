
const { insertCaptain } = require('../../../database/queries/captain/addCaptain');

const addCaptain = (req, res) => {
  console.log(8888, req.body, 88888888);
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
  };

  insertCaptain(captainInfo)
    .then(({ captain }) => {
      console.log('hhhhhhhh', captain);
      // if (!captain[0]) {
      //   res.status(400).send({
      //     error: 'captain dose not added',
      //   });
      // } else {
      //   res.status(201).send({
      //     result: captain[0],
      //   });
      // }
    })
    .catch((e) => {
      console.log('yeyeye');
      res.status(500).send({
        error: 'Sorry we have some issues',
      });
    });
};

module.exports = { addCaptain };
