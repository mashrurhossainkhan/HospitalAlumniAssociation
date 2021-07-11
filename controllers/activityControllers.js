const _ = require('lodash');
const { Activity, validate } = require('../model/activityName');

module.exports.createActivity = async (req, res) => {
    const { error } = validate(_.pick(req.body, ["name"]));
    if(error) return res.status(400).send(error.details[0].message);
    const activity = new Activity(_.pick(req.body, ["name"]));
    const result = await activity.save();
    return res.status(201).send({
        message: "Activity Created Successfully!",
        data: {
            name: result.name
        }
    })
}

module.exports.getActivity = async (req, res) =>{
    const activities = await Activity.find()
        .select({_id:1, name:1})
        .sort({name: 1});
    return res.status(200).send(activities);
}

