const { Router } = require('express');
const { getMessages, createMessage } = require('../controllers/messagesController')

const router = Router();

router.get('/getMessages', getMessages);
router.post('/createMessage', createMessage)

module.exports = router;
