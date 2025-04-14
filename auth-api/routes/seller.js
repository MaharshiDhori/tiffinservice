const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

router.post('/register', sellerController.register);
router.post('/login', sellerController.login);
router.put('/:id', sellerController.updateSeller);
router.delete('/:id', sellerController.deleteSeller);

module.exports = router;

