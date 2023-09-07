const express = require('express');
const { index, store, destroy, deleteAll } = require('../controllers/notification-controller');

const router = express.Router();

router.get('/', index);
router.post('/', store);
router.delete('/delete/:id', destroy)
router.delete('/delete', deleteAll)
module.exports = router;