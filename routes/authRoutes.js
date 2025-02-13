const express = require('express');
const auth = require('../middleware/auth');
const { register, login, getProfile } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/get-profile', auth, getProfile);

module.exports = router;
