const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/registerUser');
const loginUser = require('../controllers/loginUser');

router.post('/api/signup', registerUser);
router.post('/api/login', loginUser);

module.exports = router;
