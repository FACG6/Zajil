const path = require('path');
const { hashSync } = require('bcryptjs');


const { editCaptain } = require('../../../database/queries/captain/editCaptain');

const updateCaptain = (req, res) => {
  if (req.files) {
    const { file } = req.files;
    const {
      name, email, phone, address, IDNumber, licenceNumber, status, password,
    } = req.body;
    const { id } = req.params;
    const extName = path.extname(file.name).slice(1);
    const newName = `${new Date().getTime()}id_photo.${extName}`;
    if (['png', 'jpg', 'jpeg'].some(ext => ext === extName)) {
      req.files.file.mv(path.join(__dirname, '..', '..', '..', 'upload', `${newName}`), (err) => {
        if (err) res.status(500).send({ error: 'Internal Server Error' });
        else {
          const captainInfo = {
            name,
            email,
            phone,
            address,
            IDNumber,
            licenceNumber,
            status,
            newName,
          };
          if (password !== 'undefined') {
            const pass = hashSync(password, 5);
            captainInfo.pass = pass;
          }
          editCaptain({ ...captainInfo }, id)
            .then(({ rows: captain }) => {
              if (!captain[0]) {
                res.status(404).send({
                  error: 'captain dose not edit',
                });
              } else {
                res.status(202).send({
                  result: 'true',
                });
              }
            })
            .catch(() => {
              res.status(500).send({ error: 'Internal Server Error' });
            });
        }
      });
    }
  } else if (!req.files) {
    const {
      name, email, phone, address, IDNumber, licenceNumber, status, password, file,
    } = req.body;
    const captainInfo = {
      name,
      email,
      phone,
      address,
      IDNumber,
      licenceNumber,
      status,
      file,
    };
    const { id } = req.params;
    if (password !== 'undefined') {
      const pass = hashSync(password, 5);
      captainInfo.pass = pass;
    }
    editCaptain({ ...captainInfo }, id)
      .then(({ rows: captain }) => {
        if (!captain[0]) {
          res.status(404).send({
            error: 'captain dose not edit',
          });
        } else {
          res.status(202).send({
            result: 'true',
          });
        }
      })
      .catch(() => {
        res.status(500).send({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).send({ error: 'Bad Request' });
  }
};

module.exports = { updateCaptain };
