const { putCaptain } = require('../../../database/queries/captain/editCaptain');

exports.updateCaptain = (req, res) => {
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
    password,
  };

  const { id } = req.params;
  putCaptain({ ...captainInfo }, id)
    .then((updatedCaptain) => {
      if (!updatedCaptain.rowCount) {
        res.status(404).send({
          error: 'captain not found',
        });
      } else {
        res.status(202).send({
          result: 'true',
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'sorry we have some issues',
    }));
};
