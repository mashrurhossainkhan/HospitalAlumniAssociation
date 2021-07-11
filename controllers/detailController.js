const _ = require('lodash');
const formidable = require ('formidable');
const fs = require ('fs');
const { Detail, validate } = require('../model/detail');
const { valid } = require ('joi');
const { parse } = require('path');

module.exports.createDetail = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) return res.status(400).send("Something Went Wrong!");
        const { error } = validate(_.pick(fields, ["name", "description", "activity"]));
        if(error) return res.status(400).send(error.details[0].message);

        const detail = new Detail(fields);

        if(files.photo) {
            fs.readFile(files.photo.path, (err, data) => {
                if(err) return res.status(400).send("Problem in the file data!");
                detail.photo.data = data;
                detail.photo.contentType = files.photo.type;
                detail.save((err, result) =>{
                    if(err) res.status(500).send(err);
                    else return res.status(201).send({
                        message: "Product Created Successfully",
                        data: _.pick(result, ["name", "description", "activity"])
                    })
                })
            })
        }else{
            return res.status(400).send("No image provided");
        }
    })
}

//Query parameter


module.exports.getDetail = async (req, res) => {
    let order = req.query.order === 'desc' ?-1 : 1;
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const details = await Detail.find()
    .select({ photo: 0})
    .sort({ [sortBy]: order})
    .limit(limit)
    .populate('activity', 'name');
    return res.status(200).send(details);
}

module.exports.getDetailById = async (req, res) => {
    const detailId = req.params.id;
    const detail = await Detail.findById(detailId)
        .select({ photo: 0 })
        .populate('activity', 'name');
    if(!detail) res.status(404).send("Not Found!");
    return res.status(200).send(detail);
}

module.exports.getPhoto = async (req, res) => {
    const detailId = req.params.id;
    const detail = await Detail.findById(detailId)
        .select({ photo: 1, _id: 0})
    res.set ('Content-Type', detail.photo.contentType);
    return res.status(200).send(detail.photo.data);
}


//get detail by Id
//collect form data
//update provided from fields
//update photos (if provided)
module.exports.updateDetailById = async (req, res) => {
    const detailId = req.params.id;
    const detail = await Detail.findById(detailId);
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) return res.status(400).send("Something wrong");
        const updatedFields = _.pick(fields, ["name", "description", "activity"]);
        _.assignIn(detail, updatedFields);

        if(files.photo) {
            fs.readFile(files.photo.path, (err, data) => {
                if(err) return res.status(400).send("Something wrong!");
                detail.photo.data = data;
                detail.photo.contentType = files.photo.type;
                detail.save((err, result) => {
                    if(err) return res.status(500).send ("Something failed!");
                    else return res.status(200).send({
                        message: "updated successfully!!"
                    })
                })
            })
        }else{
            detail.save((err, result) => {
                if(err) return res.status(500).send("Something failed!");
                else return res.status(200).send({
                    message: "updated successfully!!"
                })
            })
        }
    })
}