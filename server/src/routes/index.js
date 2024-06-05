const { Router } = require('express');
const userRouter = require('./userRouter');
const messagesRouter = require('./messagesRouter');

const router = Router();

router.use('/users', userRouter);
router.use('/messages', messagesRouter);

module.exports = router;
