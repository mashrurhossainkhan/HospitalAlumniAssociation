const activityRouter = require ('../routers/activityRouter')
const detailRouter = require ('../routers/detailRouter')
const userRouter = require ('../routers/userRouter');

module.exports = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/activity', activityRouter);
    app.use('/api/detail', detailRouter);
}