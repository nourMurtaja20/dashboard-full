const express = require('express');
const { index, store, update, findbySave, edit, destroy } = require('../controllers/project-controller');

const router = express.Router();

router.get('/', index);
router.get('/save', findbySave);
router.post('/', store);
router.put('/update', update);
router.put('/edit/:id', edit);
router.delete('/delete/:id', destroy)
module.exports = router;