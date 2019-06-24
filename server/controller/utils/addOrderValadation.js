const Joi = require('@hapi/joi');


exports.schema = Joi.object().keys({
  address: Joi.string().alphanum().required(),
  items: Joi.required(),
  phone: Joi.number().integer().min(9).max(9)
    .required(),
  customerName: Joi.string().alphanum().required(),
  placeId: Joi.number().required(),
  captainId: Joi.number().required(),

});
