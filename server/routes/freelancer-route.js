const express = require('express');
const { index, store, destroy } = require('../controllers/freelancer-controller');

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.delete('/delete/:id', destroy)
module.exports = router;