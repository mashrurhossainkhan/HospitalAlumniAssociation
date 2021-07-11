const { Schema, model } = require('mongoose');
const Joi = require('joi');

module.exports.Activity = model('Activity', Schema({
    name: {
        type: String,
        unique: true
    }
}, {timestamps: true}));

module.exports.validate = activity => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required()
    });
    return schema.validate(activity);
}