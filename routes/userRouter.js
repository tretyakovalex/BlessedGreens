const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/registerUser');
const loginUser = require('../controllers/loginUser');

router.post('/auth/signup', registerUser);
router.post('/auth/login', loginUser);

module.exports = router;
