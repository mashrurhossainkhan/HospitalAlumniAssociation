const { Schema, model} = require('mongoose');
const jwt = require ('jsonwebtoken');
const Joi = require('joi');

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    email:{
        type: String,
        require: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    batchNo: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    BMDCregNo: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    phoneNo: {
        type: String,
        required: true,
       
    },

    bloodGroup: {
        type: String,
        enum: ['Select', 'A+ ve', 'B+ ve', 'O+ ve', 'AB+ ve', 'AB- ve', 'A- ve', 'B- ve', 'O- ve'],
        default: 'Select'
    },

    ChamberName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    Designation: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    Address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    password: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 1024
    },

    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    UserType: {
        type: String,
        enum: ['Life Member', 'General Member'],
        default: 'General Member'
    },

    TransactionID: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200
    },
   
},{timestamps: true});

userSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        batchNo: this.batchNo,
        BMDCregNo: this.BMDCregNo,
        phoneNo: this.phoneNo,
        bloodGroup: this.bloodGroup,
        ChamberName: this.ChamberName,
        Designation: this.Designation,
        Address: this.Address,
        password: this.password,
        role: this.role,
        UserType: this.UserType,
        TransactionID: this.TransactionID,
    }, process.env.JWT_SECRET_KEY, {expiresIn: "7d"});
    return token;
}

const validateUser = user => {
    const schema = Joi.object ({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(5).max(255).required(),
        batchNo: Joi.string().min(3).max(255).required(),
        BMDCregNo: Joi.string().min(2).max(255).required(),
        phoneNo: Joi.string().min(11).max(15).required(),
        bloodGroup: Joi.string().required(),
        ChamberName: Joi.string().required(),
        Designation: Joi.string().required(),
        Address: Joi.string().required(),
        password: Joi.string().min(5).max(255).required(),
        TransactionID: Joi.string().min(3).max(255).required()
    });
    return schema.validate(user);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;
