const express = require('express');
const router = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const WalletController = require('./app/controllers/WalletController');

const authMiddleware = require('./app/middlewares/auth');

router.post('/register', UserController.store);

router.post('/login', SessionController.login);
router.post('/wallet', WalletController.store);

router.use(authMiddleware);

module.exports = router;