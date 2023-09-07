const express = require('express');
const { index, store } = require('../controllers/user-controller');
const { signup, login, verify } = require('../controllers/auth-controller');

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.post('/signup', signup);
router.post('/login', login);
router.post('/verify/:email', verify);

module.exports = router;