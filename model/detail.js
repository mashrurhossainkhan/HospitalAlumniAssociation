const { Schema, model } = require('mongoose');
const Joi = require('joi');
	
module.exports.Detail = model('Detail', Schema({
    name: String,
    description: String,
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        require: true
    },
    photo: {
        data: Buffer,
        contentType: String,
    }
}, {timestamps: true}));

module.exports.validate = detail => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        description: Joi.string().max(2000).required(),
        activity: Joi.string().required(),
    });
    return schema.validate(detail);
}
