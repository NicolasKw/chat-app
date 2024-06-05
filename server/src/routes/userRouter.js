const { Router } = require('express');
const { createUser, getUsers, validateUser, signOutUser } = require('../controllers/usersController');

const router = Router();

router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.post('/validateUser', validateUser);
router.put('/signOut/:username', signOutUser);

module.exports = router;
