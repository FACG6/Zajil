const Joi = require('@hapi/joi');

exports.schema = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(/^\+?[0-9]{10,12}$/).required(),
  licenceNumber: Joi.number().min(7).required(),
  IDNumber: Joi.number().min(9).required(),
  address: Joi.string().required(),
  password: Joi.string().required(),
  status: Joi.string().regex(/^(false|true)$/).required(),
});
