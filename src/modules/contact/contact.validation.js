const joi = require('joi');


exports.contactListSchema = joi.object({
    page: joi.number().integer().min(0),
    limit: joi.number().integer().min(0)
})

exports.contactCreateSchema = joi.object({
    name: joi.string()
        .min(5)
        .max(15)
        .required(),
    phone: joi.string()
        .min(5)
        .max(15)
        .required(),
    address: joi.string().max(100).required(),
    notes: joi.string().max(100),
})


exports.contactUpdateSchema = joi.object({
    _id: joi.string().hex().length(24),
    name: joi.string()
        .min(5)
        .max(15)
        .required(),
    phone: joi.string()
        .min(5)
        .max(15)
        .required(),
    address: joi.string().max(100).required(),
    notes: joi.string().max(100),
})

exports.contactDeleteSchema = joi.object({
    _id: joi.string().hex().length(24),
})