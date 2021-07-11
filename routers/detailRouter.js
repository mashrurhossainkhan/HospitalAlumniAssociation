const router = require('express').Router();
const {
    getDetail,
    createDetail,
    getDetailById,
    updateDetailById,
    getPhoto
} = require('../controllers/detailController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route ('/')
    .post([authorize, admin], createDetail)
    .get(getDetail);

router.route('/:id')
    .get(getDetailById)
    .put([authorize, admin], updateDetailById);

router.route('/photo/:id')
    .get(getPhoto)


module.exports = router;