const Joi = require('@hapi/joi');

exports.schema = Joi.object.keys({
  phone: Joi.required(),
  address: Joi.required(),
  items: Joi.required(),
  storeID: Joi.number().required(),
});
