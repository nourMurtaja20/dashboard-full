const express = require('express');
const { index, store } = require('../controllers/question-controller');

const router = express.Router();

router.get('/', index);
router.post('/', store);

module.exports = router;