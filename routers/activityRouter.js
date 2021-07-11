const router = require ('express').Router();
const {getActivity, createActivity} = require('../controllers/activityControllers');
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');

router.route('/')
    .post([authorize, admin], createActivity)
    .get(getActivity);

module.exports = router;