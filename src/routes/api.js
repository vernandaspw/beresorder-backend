var express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
var router = express.Router();

router.get('/seed-admin', require('../seeder/AdminSeeder').user);
router.post('/v1/admin/auth/login', require('../controller/api/auth/adminAuthController').login);
router.post('/v1/admin/auth/login-send-otp', require('../controller/api/auth/adminAuthController').sendOtp);
router.post('/v1/admin/auth/login-with-otp', require('../controller/api/auth/adminAuthController').loginWithOtp);
router.post('/v1/admin/auth/token', require('../controller/api/auth/adminAuthController').refreshToken);
router.post('/v1/admin/auth/logout', authMiddleware, require('../controller/api/auth/adminAuthController').logout);

// router.get('/v1/apps/:id', authMiddleware, require('../src/api/appController').getById);

module.exports = router